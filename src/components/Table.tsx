import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";

export const Table: React.FC = () => {
  return (
    <Stack
      sx={{
        height: "100vh",
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <h1>Tabela Fipe</h1>
      <h2>Consulte o valor de um veículo de forma gratuita</h2>
      <Box
        sx={{
          width: 400,
          height: 200,
          backgroundColor: 'white',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControl sx={{ m: 2, minWidth: 300 }}>
          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={2}
            label="Age"
            onChange={() => console.log('mudou')}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 300 }}>
          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={2}
            label="Age"
            onChange={() => console.log('mudou')}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button>Consultar Preço</Button>
      </Box>
    </Stack>
  )
}