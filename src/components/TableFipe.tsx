import { Box, Button, SelectChangeEvent } from "@mui/material"
import React, { useContext, useState } from "react"
import { CarContext } from "../contexts/CarContext";
import { useCarsBrands } from "../hooks/useCarsBrands";
import { useCarsModels } from "../hooks/useCarsModels";
import { useCarsYears } from "../hooks/useCarsYears";
import { SelectFipe } from "./SelectFipe";

export const TableFipe: React.FC = () => {
  const { carsBrands } = useCarsBrands();
  const { modelsOfCarSelected } = useCarsModels();
  const { yearsOfModelSelected } = useCarsYears();
  const [showSelectYear, setShowSelectYear] = useState(false);
  const carContext = useContext(CarContext);

  const [brandSelected, setBrandSelected] = useState<string>('');
  const [modelSelected, setModelSelected] = useState<string>('');
  const [yearSelected, setYearSelected] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChangeBrand = (ev: SelectChangeEvent<string>, child: React.ReactNode) => {
    setBrandSelected(ev.target.value);
    const findBrand = carsBrands?.find(brand => brand.nome === ev.target.value);

    if (modelSelected || yearSelected) {
      carContext?.updateCarCodes({ year: '', model: '' });
      setModelSelected('');
      setYearSelected('')
      setIsDisabled(true);
      setShowSelectYear(false);
    }

    if (findBrand) {
      carContext?.updateCarCodes({ brand: findBrand.codigo });
      setIsDisabled(false);
    }
  }

  const handleChangeModel = (ev: SelectChangeEvent<string>, child: React.ReactNode) => {
    setModelSelected(ev.target.value);

    const findModel = modelsOfCarSelected?.modelos.find(model => model.nome === ev.target.value);

    if (yearSelected) {
      carContext?.updateCarCodes({ year: '' });
    }

    if (findModel) {
      carContext?.updateCarCodes({ model: findModel.codigo });
      setShowSelectYear(true);
    }

  }

  const handleChangeYear = (ev: SelectChangeEvent<string>, child: React.ReactNode) => {
    setYearSelected(ev.target.value);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        width: 400,
        backgroundColor: 'white',
        marginTop: '16px',
      }}
    >
      <SelectFipe
        id="brand-select-label"
        label="Marca"
        value={brandSelected}
        selectItens={carsBrands}
        onChange={handleChangeBrand}
      />

      <SelectFipe
        id="model-select-label"
        label="Modelo"
        value={modelSelected}
        selectItens={modelsOfCarSelected?.modelos}
        onChange={handleChangeModel}
        isDisabled={isDisabled}
      />

      {showSelectYear && (
        <SelectFipe
          id="year-select-label"
          label="Ano"
          value={yearSelected}
          selectItens={yearsOfModelSelected}
          onChange={handleChangeYear}
        />
      )}

      <Button sx={{ marginBottom: '24px' }} variant='contained' disabled>Consultar Preço</Button>

    </Box>
  )
}
