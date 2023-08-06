import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        <code>vitest-extended</code> is an assertion library that extends Vitest's expect, giving developers more
        options when writing tests.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <code>vitest-extended</code> provides matchers for all data types so that you can quickly find the best matcher
        for your test.
      </>
    ),
  },
  {
    title: "Powered by open source",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        The base matchers are forked from{" "}
        <a target="_blank" href="https://jest-extended.jestcommunity.dev/">
          <code>jest-extended</code>
        </a>{" "}
        and all of the matchers are defined by the community. New matchers can be simply added by raising an issue or
        pull request{" "}
        <a target="_blank" href="https://github.com/tbhesswebber/vitest-extended">
          here
        </a>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
