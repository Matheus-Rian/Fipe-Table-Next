import { useEffect, useState } from "react";
import { ICarsBrands } from "./useCarsBrands";
import { useFetch } from "./useFetch";

export type ICarsModels = {
  anos: ICarsBrands[];
  modelos: ICarsBrands[];
}

export const useCarsModels = () => {
  const [modelCar, setModelCar] = useState<string>();

  const params = modelCar ? modelCar : null;

  const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${params}/modelos`;
  
  const { response, error } = useFetch<ICarsModels>(url);

  return {
    carsModels: response,
    setModelCar,
    error
  }
}