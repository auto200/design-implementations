import { Fragment } from "react";
import Head from "next/head";

const stats = [
  {
    text: "10k+",
    subText: "companies",
  },
  {
    text: "314",
    subText: "templates",
  },
  {
    text: "12M+",
    subText: "queries",
  },
];

const StatsPreview = () => {
  return (
    <>
      <Head>
        <title>Stats Preview</title>

        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* @ts-ignore */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-SPC-bg min-h-screen px-5 py-10 font-lexend-deca">
        <div className="text-SPC-text-primary bg-SPC-card-bg rounded-md overflow-hidden text-center">
          <div className="relative">
            <img
              src="/stats-preview-card/image-header-mobile.jpg"
              className="filter"
            />
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-SPC-accent opacity-60" />
          </div>
          <div className="px-5">
            <div className="text-3xl mt-10 mb-5 font-inter font-bold">
              Get <span className="text-SPC-accent">Insights</span> that help
              your business grow.
            </div>
            <div className="text-SPC-text-secondary mb-10">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </div>
            {stats.map(({ text, subText }) => (
              <Fragment key={text}>
                <h3 className="text-3xl font-inter font-bold">{text}</h3>
                <p className="uppercase text-sm text-SPC-text-tertiary mb-7">
                  {subText}
                </p>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsPreview;
