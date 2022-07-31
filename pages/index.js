import Head from 'next/head';
import Link from 'next/link';

import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import AppCard from '../components/AppCard';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <AppCard />
      {/* <div class='flex flex-col w-full lg:flex-row'>
        <div class='grid flex-grow h-32 card bg-base-300 rounded-box place-items-center'>
          content
        </div>
        <div class='divider lg:divider-horizontal'></div>
        <div class='grid flex-grow h-32 card bg-base-300 rounded-box place-items-center'>
          content
        </div>
        <div class='divider lg:divider-horizontal'></div>
        <div class='grid flex-grow h-32 card bg-base-300 rounded-box place-items-center'>
          content
        </div>
      </div> */}

      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}
