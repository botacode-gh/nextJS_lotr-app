import { useRouter } from "next/router";

export default function RouteExample() {
  const router = useRouter();
  console.log("router.query:", router.query);

  return <h1>Example</h1>;
}
