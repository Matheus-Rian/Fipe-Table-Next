import type { NextPage } from 'next'
import Head from 'next/head'
import GlobalStyle, { Container } from '../styles/global';
import { TableFipe } from '../components/TableFipe';

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Home | Fipe</title>
        <meta name="description" content="Project Fipe-Table with Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1 style={{ marginBottom: '12px' }}>Tabela Fipe</h1>
        <h3>Consulte o valor de um veículo de forma gratuita</h3>
        <TableFipe />
      </Container>
    </>
  )
}

export default Home;
