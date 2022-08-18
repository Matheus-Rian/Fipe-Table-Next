import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { ICarsInfo } from "../models/carModel";

interface ISelectProps<T> {
  id: string;
  label: string;
  value: string;
  selectItens: T;
  onChange: (ev: SelectChangeEvent<string>, child: React.ReactNode) => void;
  isDisabled?: boolean;
}

export const SelectFipe = <T extends ICarsInfo[] | undefined>(
  { id, label, value, selectItens, onChange, isDisabled = false }: ISelectProps<T>
) => {

  return (
    <FormControl sx={{ minWidth: 300, marginBottom: '16px', marginTop: '24px' }}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        disabled={isDisabled}
      >
        {selectItens?.map(({ codigo, nome }) => (
          <MenuItem
            key={codigo}
            value={nome}
          >
            {nome}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}