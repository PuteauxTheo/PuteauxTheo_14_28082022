import * as React from 'react';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function DropDownMenu({ title, data, setValue, value}) {


  return (
    <div>
      <h3>{title}</h3>
      <Box sx={{ minWidth: 120 }}>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)            
          }}
          id="controllable-states-demo"
          options={data}
          sx={{ width: 300 }}
          defaultValue=""
          renderInput={(params) => <TextField {...params} label={title} />}
          
        />
      </Box>
    </div>

  );
}