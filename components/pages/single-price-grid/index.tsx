import ComponentLayout from "components/ComponentLayout";
import Head from "next/head";
import styles from "./styles.module.css";

const SinglePriceGrid = () => {
  return (
    <>
      <Head>
        <title>Single Price Grid</title>
      </Head>
      <ComponentLayout bgColor="hsl(218, 22%, 67%)">
        <div className={styles.card}>
          <div
            className={`${styles.card__section} ${styles.card__firstSection}`}
          >
            <p
              className={`${styles.card__section__header} ${styles["card__firstSection__header--cyan"]}`}
            >
              Join our community
            </p>
            <p className={styles.card__firstSection__text}>
              30-day, hassle-free money back guarantee
            </p>
            <p className={styles.card__firstSection__subtext}>
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills
            </p>
          </div>
          <div className={styles.side_by_sider}>
            <div
              className={`${styles.card__section} ${styles.card__secondSection}`}
            >
              <p className={styles.card__section__header}>
                Monthly Subscription
              </p>
              <div className={styles.card__secondSection__price}>
                <p className={`${styles.card__secondSection__price__label}`}>
                  $29
                </p>
                <span className={styles.card__secondSection__price__tag}>
                  per month
                </span>
              </div>
              <p className={styles.card__secondSection__subtext}>
                Full access for less than $1 a day
              </p>
              <button className={styles["signup-btn"]}>Sign Up</button>
            </div>
            <div
              className={`${styles.card__section} ${styles.card__thirdSection}`}
            >
              <h1 className={styles.card__section__header}>Why Us</h1>
              <ul className={styles.card__thirdSection__list}>
                <li className={styles.card__thirdSection__list__item}>
                  Tutorials by industry experts
                </li>
                <li className={styles.card__thirdSection__list__item}>
                  Peer & expert code review
                </li>
                <li className={styles.card__thirdSection__list__item}>
                  Coding exercises
                </li>
                <li className={styles.card__thirdSection__list__item}>
                  Access to our GitHub repos
                </li>
                <li className={styles.card__thirdSection__list__item}>
                  Community forum
                </li>
                <li className={styles.card__thirdSection__list__item}>
                  Flashcard decks
                </li>
                <li className={styles.card__thirdSection__list__item}>
                  New videos every week
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ComponentLayout>
    </>
  );
};

export default SinglePriceGrid;
