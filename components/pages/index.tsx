import Link from "next/link";
import Head from "next/head";

const components = [
  {
    name: "Single Price Grid",
    slug: "single-price-grid",
  },
  {
    name: "Stats Preview Card",
    slug: "stats-preview-card",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Aggregation</title>
      </Head>
      <div className="min-h-screen bg-gray-700 text-gray-50">
        <div className="text-center">
          <h1 className="text-4xl">Components</h1>
          <div className="flex flex-wrap text-center justify-center">
            {components.map(({ name, slug }) => (
              <div key={slug} className="w-96  m-10 cursor-pointer">
                <h1 className="text-3xl font-bold">{name}</h1>
                <Link href={`/${slug}`}>
                  <img src={`/homepage/${slug}.jpg`} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
