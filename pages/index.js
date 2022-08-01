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
      <div className='flex justify-center'>
        <h2 className='text-lg m-4'>
          Projects <span className='badge badge-md'>NEW</span>
        </h2>
      </div>
      <div id='projects' className='flex flex-col w-full lg:flex-row my-2'>
        <div className='grid flex-grow h-auto card bg-base-100 rounded-box place-items-center my-2 pb-6'>
          <AppCard
            title={'Fullstack Fighters'}
            desc={'Multiplayer fighting game with socket.io room feature'}
            alt={'description for picture'}
            img={'/images/project01.png'}
            site={'https://fullstackfighters.herokuapp.com/'}
          />
        </div>
        <div className='divider lg:divider-horizontal'></div>
        <div className='grid flex-grow h-auto card bg-base-100 rounded-box place-items-center my-2 pb-6'>
          <AppCard
            title={'title'}
            desc={'this is the description'}
            alt={'description for picture'}
            img={'https://placeimg.com/400/225/arch'}
          />
        </div>
      </div>
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
      </section>
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
