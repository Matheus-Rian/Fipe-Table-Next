import { useEffect, useState } from "react";
import { ICarsInfo } from "../models/carModel";
import CarsService from "../services/CarsService";

export const useCarsBrands = () => {
  const [brandSelected, setBrandSelected] = useState<string>('');
  const [carsBrands, setCarsBrands] = useState<ICarsInfo[]>();
  
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
    brandSelected, 
    setBrandSelected,
  };
}