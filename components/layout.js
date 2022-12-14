import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import AppNavbar from './AppNavbar';
import AppHero from './AppHero';
import AppFooter from './AppFooter';

const name = 'Emanuel Guevara';
export const siteTitle = 'Hire Emanuel Guevara';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content="Emanuel Guevara's personal website using Next.js"
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      {home ? (
        <AppNavbar
          about={'#about'}
          projects={'#projects'}
          contact={'#contact'}
        />
      ) : (
        <AppNavbar
          about={'/#about'}
          projects={'/#projects'}
          contact={'/#contact'}
        />
      )}

      <header className={styles.header}>
        {home ? (
          <>
            <AppHero />
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/images/profile.jpg'
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>
        {home ? (
          children
        ) : (
          <div className={styles.backToHome}>
            <Link href='/'>
              <a>??? Back to home</a>
            </Link>
          </div>
        )}
      </main>
      <AppFooter />
    </div>
  );
}
