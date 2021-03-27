import Link from "next/link";

export default function CoverImage({ title, src, slug }) {
  const image = (
    // Using next/image would be nice but doesn't support static compilation.
    // Use own version instead since our images are pretty small.
    // <Image
    //   src={src}
    //   alt={`Kuvituskuva kirjoitukselle ${title}`}
    //   className={cn("shadow-sm", {
    //     "hover:shadow-md transition-shadow duration-200": slug,
    //   })}
    //   layout="responsive"
    //   width={width}
    //   height={height}
    // />
    <div>
      <img
        src={src}
        alt={`Kuvituskuva kirjoitukselle ${title}`}
        className="object-cover w-full"
      />
    </div>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/${slug}`} href="/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
