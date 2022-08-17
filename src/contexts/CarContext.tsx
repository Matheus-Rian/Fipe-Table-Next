import React, { createContext, useState } from "react";

type CarCodes = {
  brand: string,
  model: string,
  year: string,
}

interface ICarContext {
  carCodes: CarCodes,
  updateCarCodes: (updateData: Partial<CarCodes>) => void,
}

export const CarContext = createContext<ICarContext | null>(null);

export const CarContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [carCodes, setCarCodes] = useState<CarCodes>({
    brand: '',
    model: '',
    year: '',
  });

  function updateCarCodes(data: Partial<CarCodes>) {
    setCarCodes((prev) => ({...prev, ...data}));
  }

  return (
    <CarContext.Provider 
      value={{
        updateCarCodes,
        carCodes,
      }}
    >
      {children}
    </CarContext.Provider>
  )
}
