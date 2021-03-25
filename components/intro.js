import Link from "next/link";
import Nav from "./nav";

export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 md:mt-12 mb-16 md:mb-12">
      <div>
        <h1 className="text-center md:text-left text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-0">
          <Link href="/">
            <a className="text-black">Kerkesix</a>
          </Link>
        </h1>
        <h4 className="text-center md:text-left text-lg my-0">
          Hyvän mielen asialla jo vuodesta 2003
        </h4>
      </div>

      <Nav />
    </section>
  );
}
