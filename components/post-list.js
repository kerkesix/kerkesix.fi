import { parseISO } from "date-fns";
import Link from "next/link";

export default function PostList({ allPosts }) {
  if (!allPosts) {
    return false;
  }

  let { byYear, byTag } = groupPosts(allPosts);
  let years = Array.from(byYear.keys()).sort();
  let tags = Array.from(byTag.keys()).sort();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 mb-5">
      <GroupedPosts index={years} list={byYear} title="Aikajärjestyksessä" />
      <GroupedPosts index={tags} list={byTag} title="Aihepiireittäin" />
    </div>
  );
}

const GroupedPosts = ({ index, list, title }) => (
  <section>
    <h4 className="text-4xl md:text-5xl font-bold font-bold mb-4">{title}</h4>
    {index.map((t, i) => (
      <div key={i}>
        <h5 className="mt-3 font-semibold">{t}</h5>
        <List posts={list.get(t)} />
      </div>
    ))}
  </section>
);

const List = ({ posts }) => (
  <ul>
    {posts.map((p, i) => (
      <li key={i}>
        <Link href={`/${p.slug}`}>{p.title}</Link>
      </li>
    ))}
  </ul>
);

function groupPosts(allPosts) {
  let byYear = new Map();
  let byTag = new Map();

  for (const p of allPosts) {
    // Group by year
    const y = parseISO(p.date).getFullYear();
    if (!byYear.has(y)) {
      byYear.set(y, []);
    }

    let ylist = byYear.get(y);
    ylist.push(p);
    byYear.set(y, ylist);

    // Group by tag
    for (const tag of p.tags) {
      if (!byTag.has(tag)) {
        byTag.set(tag, []);
      }

      let taglist = byTag.get(tag);
      taglist.push(p);
      byTag.set(tag, taglist);
    }
  }
  return { byYear, byTag };
}
