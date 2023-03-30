import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import { getPrevious, getNext } from "../../lib/utils";
import { useRouter } from "next/router";
import Head from "next/head";

export default function GenericVolumePage() {
  const router = useRouter();
  const { slug } = router.query;
  const volume = volumes.find((volume) => volume.slug === slug);

  if (!volume) {
    return null;
  }

  const { title, cover, books, description } = volume;
  console.log("volume:", volume);

  const previousVolume = getPrevious(volumes, volume);
  console.log("previousVolume:", previousVolume);

  const nextVolume = getNext(volumes, volume);
  console.log("nextVolume:", nextVolume);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/volumes">&#8610; Return to All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>Within this Volume you&apos;ll find the books</h2>
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
            &#8610; Preceding Volume: <strong>{previousVolume.title}</strong>
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            &#8611; Succeeding Volume: <strong>{nextVolume.title}</strong>
          </Link>
        </div>
      ) : null}
    </>
  );
}
