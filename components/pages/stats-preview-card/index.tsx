import Head from "next/head";

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
      <div className="my-3">text</div>
    </>
  );
};

export default StatsPreview;
