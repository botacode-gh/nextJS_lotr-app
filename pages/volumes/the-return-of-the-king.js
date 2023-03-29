import Link from "next/link";
import { volumes } from "../../lib/data.js";
import Image from "next/image.js";

export default function Volume3() {
  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>Books</h2>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <cite>{title}</cite>
          </li>
        ))}
      </ul>{" "}
      <Image
        src={cover}
        alt={`Book cover of ${title}`}
        width={287}
        height={466}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            → Next Volume: {nextVolume.title}
          </Link>
        </div>
      ) : null}
    </>
  );
}
