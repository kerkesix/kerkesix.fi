export default function PostGallery({ imgs }) {
  if (!imgs || !imgs.length) {
    return false;
  }

  // Imgs might have a separate thumbnail and image, but these are so old and thus small
  // images that we might as well use the actual image and discard the thumbnail
  return (
    <div className="max-w-2xl mx-auto">
      {imgs.map((v, i) => (
        <div key={i} className="mb-2">
          <img src={v.img} className="object-contain" />
        </div>
      ))}
    </div>
  );
}
