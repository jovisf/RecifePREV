import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller } from "react-hook-form";
import {addErrorIntoField} from "../utils"


const Fundos = [
    {label:'Fundo Imobiliário',value: "FI"},
    {label:'Fundo Exemplo', value: "FE"},
]

interface props {
  control: any,
  name: string,
  errors: any;
}


export default function AutocompleteFields(props:props) {
    return (
      <Controller
          name={props.name}
          control={props.control}
          render={({field}) => (
            
            <Autocomplete
              {...field}
              {...addErrorIntoField(props.errors)}
              disablePortal
              id="fundos"
              options={Fundos}
              sx={{ width: '80%', mb: '1rem', mr:'1rem'}}
              renderInput={(params) => <TextField {...params} label="Razão Social" />}
              renderOption={(props, option) => (
                <li {...props}>{`${option.label} - ${option.value}`}</li>
              )}
              /> 
              )}
    
        />

    );
  }