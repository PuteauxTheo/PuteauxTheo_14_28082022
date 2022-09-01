import * as React from "react"
import TextField from '@mui/material/TextField'

export default function DatePicker( { titleDatePicker }) {
    return (
        <div style={{ margin: 'auto', display: 'block', width: 'fit-content' }}>
            <h3>{titleDatePicker}</h3>
            <TextField
                id="date"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true, }}
            />
        </div>
    );
}