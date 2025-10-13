import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PricelowHigh = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
         <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Filter</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Name, A to Z</MenuItem>
        <MenuItem value={20}>Name, Z to A</MenuItem>
        <MenuItem value={30}>Price, Low to High</MenuItem>
        <MenuItem value={30}>Price, High to Low</MenuItem>
      </Select>
    </FormControl>
    )
}

export default PricelowHigh
