/* eslint-disable */

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterTheme = ({ handleSelectTheme }) => {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Categories
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleSelectTheme}
          autoWidth
          label="Categories"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="THEMEPARK">Parc Aquatique</MenuItem>
          <MenuItem value="WATER_PARK">Parc à thème</MenuItem>
          <MenuItem value="ZOO">ZOO</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterTheme;
