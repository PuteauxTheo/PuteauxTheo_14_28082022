import * as React from 'react';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function DropDownMenu({ title, data, setValue, value, colorInput}) {


  return (
    <div>
      <h3 className='title-input-form states'>{title}</h3>
      <Box sx={{ minWidth: 120 }}>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)            
          }}
          id="controllable-states-demo"
          options={data}
          style={{margin:"auto"}}
          sx={{ maxWidth: 250}}
          defaultValue=""
          renderInput={(params) => <TextField {...params} label={title} InputLabelProps={{ style: { color: colorInput }}} sx={{ input: { color:  colorInput} }} />}
          
        />
      </Box>
    </div>

  );
}