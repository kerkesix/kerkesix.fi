import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image
      src={src}
      alt={`Kuvituskuva kirjoitukselle ${title}`}
      className={cn("shadow-sm", {
        "hover:shadow-md transition-shadow duration-200": slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
    // <img
    //   src={src}
    //   alt={`Kuvituskuva kirjoitukselle ${title}`}
    //   width={width}
    //   height={height}
    //   style={{ objectFit: "cover", objectPosition: "center top" }}
    // />
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
