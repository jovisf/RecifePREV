import React from "react";
import { FormControl, TextField } from "@mui/material";


interface TextFieldsProps {
    label: string;
    input?: any;
  }
  
  const TextFields: React.FC<TextFieldsProps> = (props) => {
    return (
      <FormControl fullWidth sx={{ mb: '1rem' , width: '80%', mr:'1rem' }}>
        <TextField required variant="filled" label={props.label} InputProps={props.input} />
      </FormControl>
    );
  };
  
  export default TextFields;