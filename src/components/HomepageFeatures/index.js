import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Getting started",
    Svg: require("@site/static/assets/gettingstarted-icon.svg").default,
    description: (
      <>Find step-by-step guides to help you navigate the platform.</>
    ),
  },
  {
    title: "Other features",
    Svg: require("@site/static/assets/otherfeatures-icon.svg").default,
    description: (
      <>
        Explore advanced tools and functionalities to enhance your learning or
        teaching experience.
      </>
    ),
  },
  {
    title: "Updates",
    Svg: require("@site/static/assets/updates-icon.svg").default,
    description: (
      <>
        Access the latest updates and announcements of new features and
        improvements in the LMS.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4", styles.featureGap)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
