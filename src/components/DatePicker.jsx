import * as React from "react";
import TextField from '@mui/material/TextField';


export default function DatePicker( { titleDatePicker, setValue }) {


    return (
        <div style={{ margin: 'auto', display: 'block', width: 'fit-content' }}>
            <h3 className="title-input-form">{titleDatePicker}</h3>
            <TextField
                id="date"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true, }}
                onChange={ e => {
                    const d = new Date(e.target.value);
                    setValue(d)
                }}
            />
            
        </div>
    );
}