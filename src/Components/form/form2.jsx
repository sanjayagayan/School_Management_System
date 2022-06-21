import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function GroupedSelect() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel htmlFor="grouped-select">Schools</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Programs">
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl> 
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel htmlFor="grouped-select">Programs</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Programs">
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl> 
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel htmlFor="grouped-select">Session</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Session">
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel htmlFor="grouped-select">Departments</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Departments">
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl> 
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel htmlFor="grouped-select">Option</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Option">
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl> 
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel htmlFor="grouped-select">Semester</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Semester">
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
      
    </div>
    
  );
}