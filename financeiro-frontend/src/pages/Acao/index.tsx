import React from 'react'
import { SelectChangeEvent } from '@mui/material/Select';
import { Box, Typography, Button } from '@mui/material';
import TextFields from '../../components/TextFields';
import SelectFields from '../../components/SelectFields';
import DataFields from '../../components/DataFields';
import AutocompleteFields from '../../components/AutocompleteFields';


export const Acao: React.FC = () => {

    const handleInputChange = (event: SelectChangeEvent) => { // só aceita floats positivos
        
        const sanitizedValue = event.target.value.replace(/[^\d.]/g, '');
      

        event.target.value = sanitizedValue;
      };

    return (
        <Box 
            id="container-acao" 
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                backgroundColor:'white',
                width:'100%',
                mb:'2rem'
        }}
        >
            <Box component={'form'} sx={{width:'50%', mt:'2rem', backgroundColor:'#e5e8ed', padding:'2rem', display:'flex',justifyContent:'center', flexDirection:'column'}}>
                <Typography component='h1'> Realize a sua ação</Typography>
                <TextFields label='Cnpj'></TextFields>
                <AutocompleteFields/>
                <DataFields/>
                <SelectFields label='Ação'/>
                <TextFields label='Quantidade de Cotas' input={{type:'text' , onChange: handleInputChange}}></TextFields>
                <TextFields label='Valor Cota' input={{type:'text' , onChange: handleInputChange}}></TextFields>
                <Button variant="outlined" sx={{color:'currentColor',  width: '80%', border: '1px solid rgba(0, 0, 0, 0.5)'}}>Enviar</Button>
            </Box>            
        </Box>        
    )
}