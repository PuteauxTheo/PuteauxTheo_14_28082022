import * as React from 'react';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function DropDownMenu({ title, data }) {

  return (
    <div>
      <h3>{title}</h3>
      <Box sx={{ minWidth: 120 }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data}
          sx={{ width: 300 }}
          defaultValue={data[0]}
          renderInput={(params) => <TextField {...params} label={title} />}
        />
      </Box>
    </div>

  );
}