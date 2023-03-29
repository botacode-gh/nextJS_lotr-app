import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function GeneralVolumePage() {
  const router = useRouter();
  const { slug } = router.query;
  const { title, cover, books, description } = volumes.find(
    (volume) => volume.slug === slug
  );
  console.log("slug:", slug);
  return (
    <>
      <nav>
        <Link href="/volumes">← All Volumes</Link>
      </nav>
      <section>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      <section>
        <h2>Books</h2>
        <ul>
          {volumes.map(({ ordinal, title }) => (
            <li key={ordinal}>
              {ordinal}: {title}
            </li>
          ))}
        </ul>
        <Image
          src={cover}
          alt={`Cover for ${volume1.title}`}
          width={287}
          height={466}
        />
      </section>
    </>
  );
}
