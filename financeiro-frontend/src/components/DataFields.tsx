import React from "react";
import { FormControl, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import dayjs from "dayjs";

interface DataFieldsProps {
    defaultValue?: dayjs.ConfigType;  
  }
  
  const DataFields: React.FC<DataFieldsProps> = (props) => {
    const defaultDate = props.defaultValue ? props.defaultValue : dayjs(); // a data default sempre será o dia atual
    
    return (
      <FormControl fullWidth sx={{width: '80%', mr:'1rem'}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimeField
          label="Data da operação"
          defaultValue={defaultDate}
        />
        </LocalizationProvider>
      </FormControl>
    );
  };
  
  export default DataFields;