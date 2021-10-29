import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectVariants() {
  const [uf, setUF] = React.useState('');

  const handleChange = (event) => {
    setUF(event.target.value);
  };

  return (

    <FormControl fullWidth variant="filled" sx={{ m: 1, }}>
      <InputLabel id="uf">Estado</InputLabel>
      <Select
        labelId="Estado"
        id="uf"
        value={uf}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}