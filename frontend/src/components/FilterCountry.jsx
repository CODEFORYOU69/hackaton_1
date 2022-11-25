/* eslint-disable */

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterCountry = ({ handleChange }) => {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Pays</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleChange}
          autoWidth
          label="Pays"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="FRANCE">FRANCE</MenuItem>
          <MenuItem value="ESPAGNE">ESPAGNE</MenuItem>
          <MenuItem value="PAYS BAS">PAYS BAS</MenuItem>
          <MenuItem value="ETATS UNIS">ETATS UNIS</MenuItem>
          <MenuItem value="MEXIQUE">MEXIQUE</MenuItem>
          <MenuItem value="CANADA">CANADA</MenuItem>
          <MenuItem value="GRANDE BRETAGNE">GRANDE BRETAGNE</MenuItem>
          <MenuItem value="DANEMARK">DANEMARK</MenuItem>
          <MenuItem value="SUEDE">SUEDE</MenuItem>
          <MenuItem value="MAROC">MAROC</MenuItem>
          <MenuItem value="BELGIQUE">BELGIQUE</MenuItem>
          <MenuItem value="ALLEMAGNE">ALLEMAGNE</MenuItem>
          <MenuItem value="POLOGNE">POLOGNE</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterCountry;
