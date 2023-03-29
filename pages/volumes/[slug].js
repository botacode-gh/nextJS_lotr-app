import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function GenericVolumePage() {
  const router = useRouter();
  const { slug } = router.query;
  const volume = volumes.find((volume) => volume.slug === slug);

  if (!volume) {
    return null;
  }

  const { title, cover, books, description } = volume;

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
    </>
  );
}

// {previousVolume ? (
//   <div>
//     <Link href={`/volumes/${previousVolume.slug}`}>
//       ← Previous Volume: {previousVolume.title}
//     </Link>
//   </div>
// ) : null}
// {nextVolume ? (
//   <div>
//     <Link href={`/volumes/${nextVolume.slug}`}>
//       → Next Volume: {nextVolume.title}
//     </Link>
//   </div>
// ) : null}
