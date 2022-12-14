import { useContext, useEffect, useMemo, useState } from "react";
import { CarContext } from "../contexts/CarContext";
import { ICarsInfo } from "../models/carModel";
import CarsService from "../services/CarsService";

export const useCarsYears = () => {
  const [yearsOfModelSelected, setYearsOfModelSelected] = useState<ICarsInfo[]>();
  const [showSelectYear, setShowSelectYear] = useState(false);
  const [yearSelected, setYearSelected] = useState<string>('');
  const carContext = useContext(CarContext);

  const brandSelected = useMemo(() => {
    return carContext?.carCodes.brand || '';
  }, [carContext?.carCodes.brand]);

  useEffect(() => {
    async function loadYears() {
      try {
        if (carContext?.carCodes.model) {
          const response = await CarsService.listYears(brandSelected, carContext.carCodes.model);
          setYearsOfModelSelected(response);
        }
      } catch (err) {
        console.error(err);
      }
    }

    loadYears();
  }, [brandSelected, carContext?.carCodes.model]);

  return {
    yearsOfModelSelected,
    yearSelected, 
    setYearSelected,
    showSelectYear,
    setShowSelectYear,
  };
}

