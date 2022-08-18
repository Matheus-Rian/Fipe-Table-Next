import type { NextPage } from 'next'
import Head from 'next/head'
import { ContainerResult } from '../styles/global';
import { CarContext } from '../contexts/CarContext';
import { useContext } from 'react';

const Result: NextPage = () => {
  const carContext = useContext(CarContext);
  const infos = {
    brand: carContext?.tableFipeResult?.Marca,
    model: carContext?.tableFipeResult?.Modelo,
    year: carContext?.tableFipeResult?.AnoModelo,
    value: carContext?.tableFipeResult?.Valor,
  };

  return (
    <>
      <Head>
        <title>Resultado | Fipe</title>
        <meta name="description" content="Project Fipe-Table with Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerResult>
        <h1>Tabela Fipe: Preço {infos.brand} {infos.model} {infos.year}</h1>
        <div className='price'>
          {infos.value}
        </div>
        <span>Este é o preço de compra do veículo</span>
      </ContainerResult>
    </>
  )
}

export default Result;
