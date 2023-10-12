import React from 'react'
import DataFields from '../../components/DataFields';
import AutocompleteFields from '../../components/AutocompleteFields';
import { Box, Typography, Button } from '@mui/material';
import TextFields from '../../components/TextFields';

export const Consulta: React.FC = () => {
    return(
        <Box 
            id="container-consulta" 
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                backgroundColor:'black',
                width:'100%',
                pb:'2rem'
        }}
        >
            <Typography component='h1' sx={{color:'white'}}> Qual consulta deseja realizar?</Typography>
            <Box component={'form'} sx={{width:'50%', mt:'2rem', backgroundColor:'#e5e8ed', padding:'2rem', display:'flex',justifyContent:'center', flexDirection:'row'}}>
                <TextFields label='Cnpj'></TextFields>
                <AutocompleteFields/>
                <DataFields/>
                <Button variant="outlined" sx={{color:'currentColor',  width: '80%', border: '1px solid rgba(0, 0, 0, 0.5)'}}>Enviar</Button>
            </Box>            
        </Box>       
    )
};