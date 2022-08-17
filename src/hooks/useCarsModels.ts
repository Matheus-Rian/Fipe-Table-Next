import { useContext, useEffect, useState } from "react";
import { CarContext } from "../contexts/CarContext";
import CarsService from "../services/CarsService";
import { ICarsBrands } from "./useCarsBrands";

export type ICarsModels = {
  anos: ICarsBrands[];
  modelos: ICarsBrands[];
}

export const useCarsModels = () => {
  const carContext = useContext(CarContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [modelSelected, setModelSelected] = useState<string>('');

  const [modelsOfCarSelected, setModelsOfCarSelected] = useState<ICarsModels>();

  useEffect(() => {
    async function loadModels() {
      try {
        if (carContext?.carCodes.brand) {
          const response = await CarsService.listModels(carContext.carCodes.brand);
          setModelsOfCarSelected(response);
        }
      } catch (err) {
        console.error(err);
      }
    }

    loadModels();
  }, [carContext?.carCodes.brand]);

  return {
    modelsOfCarSelected,
    modelSelected,
    setModelSelected,
    isDisabled,
    setIsDisabled
  }
}