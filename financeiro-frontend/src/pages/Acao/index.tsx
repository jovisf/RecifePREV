import React from 'react'
import { SelectChangeEvent } from '@mui/material/Select';
import { Box, Typography, Button } from '@mui/material';
import TextFields from '../../components/TextFields';
import SelectFields from '../../components/SelectFields';
import DataFields from '../../components/DataFields';



export const Acao: React.FC = () => {
    const [acao, setAcao] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAcao(event.target.value as string);
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
                <TextFields label='Razão Social'></TextFields>
                <DataFields/>
                <SelectFields label='Ação'/>
                <TextFields label='Quantidade de Cotas' input={{type:'number'}}></TextFields>
                <TextFields label='Valor Cota' input={{type:'number'}}></TextFields>
                <Button variant="outlined" sx={{color:'currentColor',  width: '80%', border: '1px solid rgba(0, 0, 0, 0.5)'}}>Enviar</Button>
            </Box>            
        </Box>        
    )
}