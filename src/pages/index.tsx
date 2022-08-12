import type { NextPage } from 'next'
import Head from 'next/head'
import GlobalStyle from '../styles/global';
import { Table } from '../components/Table';

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Home | Fipe</title>
        <meta name="description" content="Project Fipe-Table with Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Table />
    </>
  )
}

export default Home
