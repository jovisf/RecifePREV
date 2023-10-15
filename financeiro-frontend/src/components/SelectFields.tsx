import React from "react";
import { FormControl, TextField, MenuItem } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Controller } from "react-hook-form";
import {addErrorIntoField} from "../utils"


interface SelectFieldsProps {
    label: string;
    onChange?: (selectedValue: string) => void;
    value?: string;
    control: any;
    name: string;
    errors: any;
  }
  
  const SelectFields: React.FC<SelectFieldsProps> = (props) => {
    return (
        <FormControl fullWidth sx={{ display:'flex', mt:'1rem', mb: '1rem', width: '80%' }}>
          <Controller
          name={props.name}
          control={props.control}
          render={({field}) => (
              <TextField {...addErrorIntoField(props.errors)} {...field} required select label={props.label} variant="filled">
                  <MenuItem value=''><em>None</em></MenuItem>
                  <MenuItem value='Compra'>Compra</MenuItem>
                  <MenuItem value='Venda'>Venda</MenuItem>
              </TextField>
            )}
          />
        </FormControl>
      );
    };
  
  export default SelectFields;