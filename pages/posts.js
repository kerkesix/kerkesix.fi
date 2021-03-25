import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Header from "../components/header";
import PostList from "../components/post-list";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Header />
        <Head>
          <title>Kaikki kirjoitukset aikajärjestyksessä | Kerkesix ry</title>
        </Head>
        <Container>
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-4">
            Kaikki kirjoitukset
          </h1>
          <PostList allPosts={allPosts} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug", "tags"]);

  return {
    props: { allPosts },
  };
}
