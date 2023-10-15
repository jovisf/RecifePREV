import React from "react";
import { FormControl} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import dayjs from "dayjs";
import { Controller } from "react-hook-form";
import { useState } from "react";
import {addErrorIntoField} from "../utils"

interface DataFieldsProps {
    defaultValue?: dayjs.ConfigType;
    control: any;
    name: string;  
    errors: any;
  }

  
  const DataFields: React.FC<DataFieldsProps> = (props) => {
    const defaultDate = props.defaultValue ? props.defaultValue : dayjs(); // a data default sempre será o dia atual
    
    return (
      <FormControl fullWidth sx={{width: '80%', mr:'1rem'}}>
          <Controller
          name={props.name}
          control={props.control}
          render={({field}) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimeField
            label="Data da operação"
            defaultValue={defaultDate}
            {...addErrorIntoField(props.errors)} 
            {...field}
          />
          </LocalizationProvider>
          )}
          />
      </FormControl>
    );
  };
  
  export default DataFields;