import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post Page</title>
        <Script
          src='https://connect.facebook.net/en_US/sdk.js'
          strategy='lazyOnload'
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <Layout>
        <h1>First Post</h1>
        <Image
          src='/images/profile.png'
          alt='ai computer generated picture'
          height={144}
          width={144}
        />
        <h2>
          <Link href='/'>Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}
