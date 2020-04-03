import React from "react"

import Header from "../components/header";
import Layout from "../components/layout";
import Link from "../components/link";
import Section from "../components/section";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="Arvind Pradhan" />
    <Section id="about" title="About Me">
      <p>
        I'm a motivated Android Application development engineer who has experience building and
        scaling web applications and services in various domains.
      </p>
      <p>
        I'm also passionate about open source contributions, working in high
        impact environments with frequent deployments, and helping growing
        development teams build great products.
      </p>
    </Section>
    <Section id="experience" title="Experience">
      <Link
        title="Artivatic AI"
        link="https://www.artivatic.ai/home/"
        desc="Associate Programmer, June 2017 - Present"
      />
    </Section>
    <Section id="projects" title="Projects">
      <Link
        title="NPM @types/happypack"
        link="https://www.npmjs.com/package/@types/happypack"
        desc="Contributed to DefinitelyTyped"
      />
      <Link
        title="CodeWithAkash"
        link="https://www.youtube.com/channel/UCVlpi6qEkrdJpT1qDFmbbtQ"
        desc="A YouTube Channel"
      />
      <Link
        title="Personal Blog"
        link="https://akashishu777.github.io/CodeWithAkash/"
        desc="An open source and customizable single-page personal Blog template for developers"
      />
      <Link
        title="Feedback Application"
        link="https://github.com/akashishu777/FeedbackApplication"
        desc="A simple restful NodeJS Feedback Application, with React, Redux, expressJS and mongoDB."
      />
    </Section>
    <Section id="skills" title="Skills">
      <Link
        title="Languages & Frameworks"
        desc="JavaScript (ES6+), React, Redux, Node.js, TypeScript, Webpack, C#, Python, F#"
      />
      <Link title="Databases" desc="Microsoft SQL Server, MongoDB" />
      <Link
        title="Other"
        desc="Azure, TeamCity, GitHub, SVN, CI / CD, API design, Agile / Scrum"
      />
    </Section>
  </Layout>
);

export default IndexPage
