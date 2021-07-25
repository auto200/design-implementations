import ComponentLayout from "components/ComponentLayout";
import Head from "next/head";
import { screens } from "tailwindcss/defaultTheme";

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
      <ComponentLayout bgColor="hsl(233, 47%, 7%)">
        <div className="bg-SPC-bg min-h-screen px-5 py-10 font-lexend-deca sm:flex sm:items-center sm:justify-center">
          {/* card */}
          <div className="text-SPC-text-primary bg-SPC-card-bg rounded-md overflow-hidden text-center sm:flex sm:max-w-4xl sm:text-left">
            {/* image */}
            <div className="relative sm:w-5/12 sm:order-1">
              <picture>
                <source
                  srcSet="/stats-preview-card/image-header-desktop.jpg"
                  media={`(min-width: ${screens?.sm})`}
                />
                <img
                  src="/stats-preview-card/image-header-mobile.jpg"
                  className="w-full h-full sm:object-cover"
                />
              </picture>
              <div className="absolute inset-0 w-full h-full z-10 bg-SPC-accent opacity-60" />
            </div>
            {/* texts */}
            <div className="px-5 sm:px-16 sm:py-5 sm:w-7/12">
              <div className="text-3xl mt-10 font-inter font-bold sm:max-w-sm">
                Get <span className="text-SPC-accent">Insights</span> that help
                your business grow.
              </div>
              <div className="text-SPC-text-secondary mt-5 sm:max-w-sm">
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </div>
              <div className="my-10 sm:flex">
                {stats.map(({ text, subText }) => (
                  <div key={text + subText} className="mt-7 sm:mr-auto">
                    <h3 className="text-3xl font-inter font-bold">{text}</h3>
                    <p className="uppercase text-sm text-SPC-text-tertiary">
                      {subText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ComponentLayout>
    </>
  );
};

export default StatsPreview;
