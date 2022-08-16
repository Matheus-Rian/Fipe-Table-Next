import { Box, Button, SelectChangeEvent } from "@mui/material"
import React, { useEffect, useState } from "react"
import { ICarsBrands, useCarsBrands } from "../hooks/useCarsBrands";
import { SelectFipe } from "./SelectFipe";

export const TableFipe: React.FC = () => {
  const [brandSelect, setBrandSelect] = useState<string>('');
  const { carsBrands } = useCarsBrands();
  const [model, setModel] = useState<ICarsBrands>();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChangeBrand = (ev: SelectChangeEvent<string>, child: React.ReactNode) => {
    setBrandSelect(ev.target.value);
  }

  useEffect(() => {
    const findCar = carsBrands?.find(el => el.nome === brandSelect);

    if (findCar)
      setIsDisabled(false);

    setModel(findCar);
  }, [brandSelect, carsBrands]);

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
        value={brandSelect}
        selectItens={carsBrands}
        onChange={handleChangeBrand}
      />
  
      <SelectFipe
        id="model-select-label"
        label="Modelo"
        value={brandSelect}
        selectItens={carsBrands}
        onChange={handleChangeBrand}
        isDisabled={isDisabled}
      />

      <Button sx={{ marginBottom: '24px' }} variant='contained' disabled>Consultar Preço</Button>

    </Box>
  )
}
