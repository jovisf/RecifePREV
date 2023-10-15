import React from "react";
import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import {addErrorIntoField} from "../utils"
import { AnyARecord } from "dns";

interface TextFieldsProps {
    label: string;
    name:string;
    input?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    control?: any;
    errors: any;
  }
  
  const TextFields: React.FC<TextFieldsProps> = (props) => {
    return (
      <FormControl fullWidth sx={{ mb: '1rem' , width: '80%', mr:'1rem' }}>
        <Controller
          name={props.name}
          control={props.control}
          render={({field}) => (
            <TextField {...field} {...addErrorIntoField} required variant="filled" label={props.label} InputProps={props.input}/>
          )}
        />
      </FormControl>
    );
  };
  
  export default TextFields;