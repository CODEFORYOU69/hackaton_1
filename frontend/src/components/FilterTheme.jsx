/* eslint-disable */

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterTheme = () => {
  const [theme, setTheme] = React.useState("");

  const handleChange = (event) => {
    setTheme(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Categories
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={theme}
          onChange={handleChange}
          autoWidth
          label="Categories"
        >
          <MenuItem value="">
            <em>---</em>
          </MenuItem>
          <MenuItem value={10}>Parc Aquatique</MenuItem>
          <MenuItem value={21}>Parc à thème</MenuItem>
          <MenuItem value={22}>lol</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterTheme;
