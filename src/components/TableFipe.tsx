import { Box, TextField, MenuItem, Button } from "@mui/material"
import React, { useState } from "react"
import { useCarsBrands } from "../hooks/useCarsBrands";

export const TableFipe: React.FC = () => {
  const [country, setCountry] = useState('');
  const { carsBrands } = useCarsBrands();
  console.log({ carsBrands });

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(ev.target.value as string);
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
        value={country}
        onChange={handleChange}
        sx={{ minWidth: 300, marginBottom: '16px', marginTop: '24px' }}
      >
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='BR'>Brasil</MenuItem>
      </TextField>

      <TextField
        label='Select Country'
        select
        value={country}
        onChange={handleChange}
        sx={{ minWidth: 300, marginBottom: '16px' }}
      >
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='BR'>Brasil</MenuItem>
      </TextField>

      <Button sx={{ marginBottom: '24px' }} variant='contained' disabled>Consultar Preço</Button>

    </Box>
  )
}
