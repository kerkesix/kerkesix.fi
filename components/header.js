import Link from "next/link";
import Container from "./container";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="pt-4 lg:pt-6 pb-1 lg:pb-2 mb-10 lg:mb-20 bg-accent-1 border-b border-accent-2">
      <Container>
        <nav className="flex flex-col lg:flex-row">
          <h2 className="text-center lg:text-left text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
            <Link href="/">
              <a className="text-black">Kerkesix</a>
            </Link>
          </h2>
          <Nav />
        </nav>
      </Container>
    </header>
  );
}
