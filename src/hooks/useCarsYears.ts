import { useContext, useEffect, useState } from "react";
import { CarContext } from "../contexts/CarContext";
import CarsService from "../services/CarsService";
import { ICarsBrands } from "./useCarsBrands";

export const useCarsYears = () => {
  const [modelCarSelected, setModelCarSelected] = useState<ICarsBrands>({codigo: '', nome: ''});
  const [yearsOfModelSelected, setYearsOfModelSelected] = useState<ICarsBrands[]>();
  const carContext = useContext(CarContext);

  useEffect(() => {
    async function loadModels() {
      try {
        if (carContext && carContext.carCodes.brand && carContext.carCodes.model) {
          const response = await CarsService.listYears(carContext.carCodes.brand, carContext.carCodes.model);
          setYearsOfModelSelected(response);
        }
      } catch (err) {
        console.error(err);
      }
    }

    loadModels();
  }, [carContext, modelCarSelected]);

  return {
    yearsOfModelSelected,
    setModelCarSelected,
  };
}