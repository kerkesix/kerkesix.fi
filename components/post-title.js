export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl  lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-8 lg:mb-12 text-center md:text-left">
      {children}
    </h1>
  );
}
