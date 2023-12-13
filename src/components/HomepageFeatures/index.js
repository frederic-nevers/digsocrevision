import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Class Notes',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Use these class notes for your revisions.
        <br /><br />
        <ol className={styles.listItem}>
          <li><a href="/docs/1-Intro">Intro to Digital Society</a></li>
          <li><a href="/docs/category/2-concepts">Concepts</a></li>
          <li><a href="/docs/category/3-content">Content</a></li>
          <li><a href="/docs/category/4-contexts">Contexts</a></li>
        </ol>
        <a href="https://www.freepik.com/free-vector/student-guy-studying-internet-watching-online-lecture-computer-talking-math-tutor-through-video-call-cartoon-illustration_12699851.htm#query=textbook&position=22&from_view=search&track=sph&uuid=6facc644-8780-4925-86ae-2507a197ec3e">Image by pch.vector</a> on Freepik
      </>
    ),
  },
  {
    title: 'News and resources',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Keep up to date with the latest Digital Society news and resources.
        <br /><br /> 
        <a href="https://www.freepik.com/free-vector/hand-holding-smartphones-with-online-newspaper-newsletter-weblog_20827768.htm#query=news&position=2&from_view=search&track=sph&uuid=f9c13221-c28e-4637-9f21-8a00042ba6b9">Image by pch.vector</a> on Freepik
      </>
      
    ),
  },
  {
    title: 'Prepare for your exams',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Tips, Past exam questions. 
        <br /><br />
        <ol className={styles.listItem}>
          <li><a href="/docs/exams/1-paper-1">Paper 1</a></li>
          <li><a href="/docs/exams/2-paper-2">Paper 2</a></li>
          <li><a href="/docs/exams/3-ia">Internal Assessment</a></li>
        </ol>
        <br /><br />
        <a href="https://www.freepik.com/free-vector/online-education-concept_10717808.htm#query=exam&position=5&from_view=search&track=sph&uuid=8e1b3d6f-3d7f-4b9f-9d9f-0f7f0b9f9b8b">Image by pch.vector</a> on Freepik
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
