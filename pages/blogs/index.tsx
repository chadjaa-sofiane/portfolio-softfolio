import Head from "next/head";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import BlogCard from "@containers/blogs/BlogCard";
import styles from "@scss/index.module.scss";
import { IBlog } from "@containers/blogs/types";
import BlogsBackground from "@public/svgs/blogs.svg";
import useObserver from "@lib/hooks/useObserver";

interface IProps {
  blogs: IBlog[];
}

const Blogs: React.FC<IProps> = ({ blogs }) => {
  const [blogsContainerRef, isAppear] = useObserver<HTMLDivElement>({
    isIntersecting: true,
    options: { threshold: 0.4 },
    disconnect: true,
  });

  return (
    <>
      <Head>
        <title> blogs </title>
      </Head>
      <div className={styles["description"]}>
        <div className={styles["description__text"]}>
          <h1>
            welcome in my <span className={styles["primary"]}> blogs </span>{" "}
            section.
          </h1>
          <p className={styles["description__text"]}>
            here when I post my opinion and
          </p>
        </div>
        <div className={styles["illustrator__container"]}>
          {/* <Image src="/images/blogs.png" layout="fill" /> */}
          <BlogsBackground className={styles["blogs__svg"]} />
        </div>
      </div>
      <div
        ref={blogsContainerRef}
        className={`${styles["blogs__container"]} ${
          isAppear ? styles["blogs--appear"] : ""
        }`}
      >
        {blogs?.map(({ name, frontMatter }, index) => (
          <BlogCard
            key={index}
            name={name}
            title={frontMatter.title || ""}
            excerpt={frontMatter.excerpt || ""}
            imageSrc={frontMatter.coverImage}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(join("posts"));

  const blogs = files.map((file) => {
    const name = file.replace(".md", "");
    const markDownWithMeta = fs.readFileSync(join("posts", file), "utf-8");
    const { data: frontMatter } = matter(markDownWithMeta);
    return {
      name,
      frontMatter,
    };
  });

  return {
    props: {
      blogs,
    },
  };
};

export default Blogs;
