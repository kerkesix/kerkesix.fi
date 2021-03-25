import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { getExcerptFromMarkdown } from "../lib/markdownToHtml";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1, 3);
  return (
    <>
      <Layout>
        <Head>
          <title>Kerkesix ry - Hyvän mielen asialla jo vuodesta 2003</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "content",
    "tags",
  ]);

  for (let p of allPosts) {
    if (!p.excerpt) {
      p.excerpt = getExcerptFromMarkdown(p.content, 250);
    }
  }

  return {
    props: { allPosts },
  };
}
