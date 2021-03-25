import Link from "next/link";
import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  if (!posts) {
    return false;
  }

  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Lisää tarinaa
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-12">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      <div className="mb-10 text-xl text-center md:text-left">
        <Link href="/posts">Kaikki kirjoitukset...</Link>
      </div>
    </section>
  );
}
