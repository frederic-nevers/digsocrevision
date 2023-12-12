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
        <br />
        <ul className={styles.listItem}>
          <li><a href="/docs/category/1-intro">Intro to Digital Society</a></li>
          <li><a href="/docs/category/2-concepts">Concepts</a></li>
          <li><a href="/docs/category/3-content">Content</a></li>
        </ul>
      </>
    ),
  },
  {
    title: 'News and resources',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Keep up to date with the latest Digital Society news and resources. 
      </>
    ),
  },
  {
    title: 'Prepare for your exams',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Tips, Past exam questions. 
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
