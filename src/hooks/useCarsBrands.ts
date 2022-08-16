import { useEffect, useState } from "react";
import CarsService from "../services/CarsService";

export type ICarsBrands = {
  nome: string,
  codigo: string,
};

export const useCarsBrands = () => {
  const [carsBrands, setCarsBrands] = useState<ICarsBrands[]>();
  
  useEffect(() => {
    async function loadBrands() {
      try {
        const response = await CarsService.listBrands();

        setCarsBrands(response);
      } catch (err) {
        console.log(err);
      }
    }

    loadBrands();
  }, [])

  return {
    carsBrands,
  };
}