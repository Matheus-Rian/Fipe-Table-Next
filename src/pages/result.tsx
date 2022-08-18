import type { NextPage } from 'next'
import Head from 'next/head'
import GlobalStyle, { Container } from '../styles/global';
import { TableFipe } from '../components/TableFipe';
import { CarContextProvider } from '../contexts/CarContext';

const Result: NextPage = () => {
  return (
    <>
      <CarContextProvider>
        <GlobalStyle />
        <Head>
          <title>Resultado | Fipe</title>
          <meta name="description" content="Project Fipe-Table with Next" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <h1>Tabela Fipe: </h1>
        </Container>
      </CarContextProvider>
    </>
  )
}

export default Result;
