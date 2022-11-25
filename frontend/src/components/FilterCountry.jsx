/* eslint-disable */

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterCountry = () => {
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Pays</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={country}
          onChange={handleChange}
          autoWidth
          label="Pays"
        >
          <MenuItem value="">
            <em>---</em>
          </MenuItem>
          <MenuItem value={10}>France</MenuItem>
          <MenuItem value={21}>Etats-Unis</MenuItem>
          <MenuItem value={22}>Italie</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterCountry;
