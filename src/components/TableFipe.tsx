import { Box, Button, SelectChangeEvent } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useCarsBrands } from "../hooks/useCarsBrands";
import { useCarsModels } from "../hooks/useCarsModels";
import { SelectFipe } from "./SelectFipe";

export const TableFipe: React.FC = () => {
  const { carsBrands } = useCarsBrands();
  const { modelsOfCarSelected, setBrandCarSelected } = useCarsModels();

  const [brandSelected, setBrandSelected] = useState<string>('');
  const [modelSelected, setModelSelected] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChangeBrand = (ev: SelectChangeEvent<string>, child: React.ReactNode) => {
    setBrandSelected(ev.target.value);
  }

  const handleChangeModel = (ev: SelectChangeEvent<string>, child: React.ReactNode) => {
    setModelSelected(ev.target.value);
  }

  useEffect(() => {
    const findCar = carsBrands?.find(el => el.nome === brandSelected);

    if (findCar) {
      setIsDisabled(false);
      setBrandCarSelected(findCar);
    }
  }, [brandSelected, carsBrands, setBrandCarSelected]);

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

      <Button sx={{ marginBottom: '24px' }} variant='contained' disabled>Consultar Preço</Button>

    </Box>
  )
}
