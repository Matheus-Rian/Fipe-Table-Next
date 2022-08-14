import { Box, TextField, MenuItem, Button } from "@mui/material"
import React, { useState } from "react"
import { useCarsBrands } from "../hooks/useCarsBrands";

export const TableFipe: React.FC = () => {
  const [brandSelect, setBrandSelect] = useState('');
  const { carsBrands } = useCarsBrands();

  const handleChangeBrand = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setBrandSelect(ev.target.value as string);
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
      <TextField
        label='Marca'
        select
        value={brandSelect}
        onChange={handleChangeBrand}
        sx={{ minWidth: 300, marginBottom: '16px', marginTop: '24px' }}
      >
        {carsBrands?.map(({ codigo, nome }) => (
          <MenuItem 
            key={codigo} 
            value={codigo}
          >
            {nome}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label='Select Country'
        select
        value={2}
        onChange={handleChangeBrand}
        sx={{ minWidth: 300, marginBottom: '16px' }}
      >
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='BR'>Brasil</MenuItem>
      </TextField>

      <Button sx={{ marginBottom: '24px' }} variant='contained' disabled>Consultar Preço</Button>

    </Box>
  )
}
