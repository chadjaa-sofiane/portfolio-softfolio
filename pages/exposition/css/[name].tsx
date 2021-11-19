import Head from "next/head";
import cssExpositionInfo from "@public/css_exposition/css_exposition_info.json";

const CssExposition = (props) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href={`/css_exposition/styles/${props.name}.css`}
        />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </>
  );
};

export const getStaticPaths = () => {
  const paths = cssExpositionInfo.map((e) => ({
    params: {
      name: e.name,
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const result = await fetch(
    `http://localhost:3000/api/exposition/readHtmlFile?name=${params.name}`
  );
  const data = await result.json();
  if (!data) {
    return {
      redirect: {
        destination: "/exposition/css",
        permanent: false,
      },
    };
  }
  return {
    props: {
      html: data.html,
      name: params.name,
    },
  };
};

export default CssExposition;
