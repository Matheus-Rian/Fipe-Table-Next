import { useEffect, useState } from "react";
import CarsService from "../services/CarsService";
import { ICarsBrands } from "./useCarsBrands";

export type ICarsModels = {
  anos: ICarsBrands[];
  modelos: ICarsBrands[];
}

export const useCarsModels = () => {
  const [brandCarSelected, setBrandCarSelected] = useState<ICarsBrands>({codigo: '', nome: ''});
  const [modelsOfCarSelected, setModelsOfCarSelected] = useState<ICarsModels>();

  useEffect(() => {
    async function loadModels() {
      try {
        if (brandCarSelected.codigo) {
          const response = await CarsService.listModels(brandCarSelected.codigo);
          setModelsOfCarSelected(response);
        }
      } catch (err) {
        console.error(err);
      }
    }

    loadModels();
  }, [brandCarSelected]);

  return {
    modelsOfCarSelected,
    setBrandCarSelected,
  }
}