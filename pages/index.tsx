import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Fipe</title>
        <meta name="description" content="Project Fipe-Table with Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World</h1>
    </>
  )
}

export default Home
