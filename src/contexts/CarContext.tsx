import React, { createContext, useState } from "react";
import { CarCodes, ICarContext, TableFipeResult } from "../models/carModel";

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
};
