import React, { createContext, useState } from "react";

type CarCodes = {
  brand: string,
  model: string,
  year: string,
}

export type TableFipeResult = {
  AnoModelo: number,
  CodigoFipe: string,
  Combustivel: string,
  Marca: string,
  MesReferencia: string,
  Modelo: string,
  SiglaCombustivel: string,
  TipoVeiculo: number
  Valor: string,
}

interface ICarContext {
  carCodes: CarCodes,
  updateCarCodes: (updateData: Partial<CarCodes>) => void,
  tableFipeResult: TableFipeResult | null,
  storeTableFipeResult: (data: TableFipeResult) => void,
}

export const CarContext = createContext<ICarContext | null>(null);

export const CarContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [carCodes, setCarCodes] = useState<CarCodes>({
    brand: '',
    model: '',
    year: '',
  });

  const [tableFipeResult, setTableFipeResult] = useState<TableFipeResult | null>(null);

  function storeTableFipeResult(data: TableFipeResult) {
    setTableFipeResult(data);
  }

  function updateCarCodes(data: Partial<CarCodes>) {
    setCarCodes((prev) => ({...prev, ...data}));
  }

  return (
    <CarContext.Provider 
      value={{
        updateCarCodes,
        carCodes,
        tableFipeResult,
        storeTableFipeResult,
      }}
    >
      {children}
    </CarContext.Provider>
  )
}
