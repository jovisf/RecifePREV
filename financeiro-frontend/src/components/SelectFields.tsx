import React from "react";
import { FormControl, TextField, MenuItem } from "@mui/material";
import { Menu } from "@mui/icons-material";


interface SelectFieldsProps {
    label:string;
  }

const SelectFields: React.FC<SelectFieldsProps> = (props) => {
    return (
        <FormControl fullWidth sx={{ display:'flex', mt:'1rem', mb: '1rem', width: '80%', textAlign: 'center' }}>
            <TextField required select label={props.label} variant="filled" sx={{display:'flex', textAlign: 'center' }}>
                <MenuItem value='Compra'>Compra</MenuItem>
                <MenuItem value='Venda'>Venda</MenuItem>
            </TextField>
        </FormControl>
    );
  };
  
  export default SelectFields;