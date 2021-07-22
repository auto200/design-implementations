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

      {/* wrapper */}
      <div className="bg-SPC-bg min-h-screen px-5 py-10 font-lexend-deca sm:flex sm:items-center sm:justify-center">
        {/* card */}
        <div className="text-SPC-text-primary bg-SPC-card-bg rounded-md overflow-hidden text-center sm:flex sm:max-w-4xl sm:text-left">
          <div className="relative sm:w-5/12 sm:order-1">
            <img
              src="/stats-preview-card/image-header-mobile.jpg"
              className=" sm:hidden"
            />
            <img
              src="/stats-preview-card/image-header-desktop.jpg"
              className="hidden sm:inline sm:w-full sm:h-full sm:object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-SPC-accent opacity-60" />
          </div>
          <div className="px-5 sm:px-16 sm:py-5 sm:w-7/12">
            <div className="text-3xl mt-10 mb-5 font-inter font-bold sm:max-w-sm">
              Get <span className="text-SPC-accent">Insights</span> that help
              your business grow.
            </div>
            <div className="text-SPC-text-secondary mb-10 sm:max-w-sm">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </div>
            <div className="sm:flex">
              {stats.map(({ text, subText }) => (
                <div key={text + subText} className="sm:mr-auto">
                  <h3 className="text-3xl font-inter font-bold">{text}</h3>
                  <p className="uppercase text-sm text-SPC-text-tertiary mb-7">
                    {subText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsPreview;
