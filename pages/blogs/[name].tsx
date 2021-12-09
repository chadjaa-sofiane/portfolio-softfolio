import Head from "next/head";
import { useRouter } from "next/router";
import fs from "fs";
import { join } from "path";
import { useEffect } from "react";
import Head from "next/head";
import matter from "gray-matter";
import { IBlog } from "@containers/blogs/types";
import hljs from "highlight.js";
import { marked } from "marked";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ArrowBack from "@material-ui/icons/ArrowBack";
import "highlight.js/styles/vs2015.css";
import styles from "@scss/index.module.scss";

interface IProps {
  blog: IBlog & {
    content: string;
  };
}

const Blog: React.FC<IProps> = ({ blog }) => {
  const { push } = useRouter();
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <Head>
        <title> {blog.frontMatter.title} </title>
        <meta name="description" content={blog.frontMatter.excerpt} />
      </Head>
      <div className={styles["blog"]}>
        <div className={styles["blog__container"]}>
          <h2 className={styles["blog__title"]}> {blog.frontMatter.title} </h2>
          <div className={styles["blog__imageField"]}>
            <img src={blog.frontMatter.coverImage} alt="blog cover image" />
          </div>
          <div
            className={styles["blog__content"]}
            dangerouslySetInnerHTML={{ __html: marked(blog.content) }}
          ></div>
        </div>
        <div className={styles["blog__sideBar"]}>
          <div
            onClick={() => push("/blogs")}
            className={styles["blog__backBtn"]}
          >
            <ArrowBack />
          </div>
          <div className={styles["blog__date"]}>
            <CalendarTodayIcon />
            <p> a day ago </p>
          </div>
          <div className={styles["blog__publicher"]}>
            <div className={styles["blog__publicher__imageField"]}>
              <img src="/images/zepli.jpg" alt="profile" />
            </div>
            <p> chadjaa sofiane </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = () => {
  const files = fs.readdirSync(join("posts"));
  const paths = files.map((file) => ({
    params: { name: file.replace(".md", "") },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const markDownWithMeta = fs.readFileSync(
    join("posts", `${params.name}.md`),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markDownWithMeta);
  return {
    props: {
      blog: {
        frontMatter,
        name: params.name,
        content,
      },
    },
  };
};

export default Blog;
