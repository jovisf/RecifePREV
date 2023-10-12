import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const Fundos = [
    {label:'Fundo Imobiliário'},
    {label:'Fundo Exemplo'},
]



export default function AutocompleteFields() {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Fundos}
        sx={{ width: '80%', mb: '1rem', mr:'1rem'}}
        renderInput={(params) => <TextField {...params} label="Razão Social" />}
      />
    );
  }