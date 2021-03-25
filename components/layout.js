import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
