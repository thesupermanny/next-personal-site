import Head from 'next/head';
import Link from 'next/link';

import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import AppCard from '../components/AppCard';
import AppContact from '../components/AppContact';

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
      <div id='projects' className='flex justify-center pt-16'>
        <h2 className='text-lg m-4'>
          Projects <span className='badge badge-md'>NEW</span>
        </h2>
      </div>
      <div className='flex flex-col w-full lg:flex-row my-2'>
        <div className='grid flex-grow h-auto card bg-base-100 rounded-box place-items-center my-2 pb-6'>
          <AppCard
            title={'Fullstack Fighters'}
            desc={'Multiplayer fighting game with socket.io room feature'}
            alt={'Screenshot of Fullstack Figthers game'}
            img={'/images/project01.png'}
            site={'https://fullstackfighters.herokuapp.com/'}
          />
        </div>
        <div className='divider lg:divider-horizontal'></div>
        <div className='grid flex-grow h-auto card bg-base-100 rounded-box place-items-center my-2 pb-6'>
          <AppCard
            title={'Bullseye'}
            desc={
              'Bullseye is an eCommerce website for snacks and a clone of a very popular store.'
            }
            alt={'Screenshot of Bullseye Store'}
            img={'/images/project02.png'}
            site={'https://github.com/2204-Federation/federation-store'}
          />
        </div>
      </div>

      <AppContact />

      {/* Blog Posts below
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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

{
  /* <div className='flex flex-col w-full lg:flex-row'>
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
      </div> */
}

{
  /* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
      </section> */
}
