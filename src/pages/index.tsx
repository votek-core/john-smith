import HomeComponent from '../modules/home/Home';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to John Smith site</title>
        <meta name='description' content='This is an example from my source code, please check more at https://github.com/rintran720' />
      </Head>
      <HomeComponent />
    </>
  );
}
