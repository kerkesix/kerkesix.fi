import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const items = [
    item("/kerkesix-ry", "Yhdistys"),
    item("/sysimusta-satku", "Sysimusta Satku"),
    item("/posts", "Kaikki kirjoitukset"),
  ];
  return (
    <nav className="mt-2 lg:mt-0 lg:ml-12">
      <ul className="flex flex-col lg:flex-row items-center lg:items-end lg:h-9 text-lg font-semibold">
        {items.map((v) => {
          const active = router.pathname === v.href;
          return (
            <li
              key={v.href}
              className={`my-1 lg:my-0 mx-4 lg:mx-6 ${
                active ? "underline font-bold" : ""
              }`}
            >
              <Link href={v.href}>
                <a className="text-black">{v.txt}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const item = (href, txt) => ({ href, txt });
