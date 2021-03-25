import Container from "./container";
import Header from "./header";
import Layout from "./layout";
import Head from "next/head";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export const Article = ({ title, coverImage, children }) => (
  <Layout>
    <Header />
    <Container>
      <article className="mb-32">
        <ArticleHeader title={title} coverImage={coverImage} />
        <ArticleBody>{children}</ArticleBody>
      </article>
    </Container>
  </Layout>
);

export const ArticleHeader = ({ title, coverImage }) => (
  <>
    <Head>
      <title>{title} | Kerkesix ry</title>
      <meta
        property="og:image"
        content={coverImage ?? "/assets/feature/campfire.jpg"}
      />
    </Head>
    <PostTitle>{title}</PostTitle>
    {coverImage ? (
      <div className="mb-8 md:mb-12 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
    ) : (
      false
    )}
  </>
);

export const ArticleBody = ({ children }) => (
  <div className="max-w-2xl mx-auto">{children}</div>
);
