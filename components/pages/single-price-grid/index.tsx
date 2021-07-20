import Head from "next/head";

const SinglePriceGrid = () => {
  return (
    <>
      <Head>
        <title>Single Price Grid</title>
        <link rel="stylesheet" href="single-price-grid.css" />
      </Head>
      <div className="card">
        <div className="card__section card__firstSection">
          <p className="card__section__header card__firstSection__header--cyan">
            Join our community
          </p>
          <p className="card__firstSection__text">
            30-day, hassle-free money back guarantee
          </p>
          <p className="card__firstSection__subtext">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills
          </p>
        </div>
        <div className="side_by_sider">
          <div className="card__section card__secondSection">
            <p className="card__section__header">Monthly Subscription</p>
            <div className="card__secondSection__price">
              <p className="card__secondSection__price__label">$29</p>
              <span className="card__secondSection__price__tag">per month</span>
            </div>
            <p className="card__secondSection__subtext">
              Full access for less than $1 a day
            </p>
            <button className="signup-btn">Sign Up</button>
          </div>

          <div className="card__section card__thirdSection">
            <h1 className="card__section__header">Why Us</h1>
            <ul className="card__thirdSection__list">
              <li className="card__thirdSection__list__item">
                Tutorials by industry experts
              </li>
              <li className="card__thirdSection__list__item">
                Peer & expert code review
              </li>
              <li className="card__thirdSection__list__item">
                Coding exercises
              </li>
              <li className="card__thirdSection__list__item">
                Access to our GitHub repos
              </li>
              <li className="card__thirdSection__list__item">
                Community forum
              </li>
              <li className="card__thirdSection__list__item">
                Flashcard decks
              </li>
              <li className="card__thirdSection__list__item">
                New videos every week
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePriceGrid;
