import { useContext } from "react"
import { CarContext } from "../contexts/CarContext"
import CarsService from "../services/CarsService";

export const usePriceTable = () => {
  const carContext = useContext(CarContext);

  const submitValues = async () => {
    try {
      if (carContext) {
        const response = await CarsService.showPriceTableFipe(
          carContext.carCodes.brand,
          carContext.carCodes.model,
          carContext.carCodes.year,
        );

        return response;
      }
    } catch (err) {
      console.error(err);
    }
  }

  return {
    submitValues,
  }
}