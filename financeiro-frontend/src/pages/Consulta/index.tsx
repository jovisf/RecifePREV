import React from 'react'
import DataFields from '../../components/DataFields';
import AutocompleteFields from '../../components/AutocompleteFields';
import { Box, Typography, Button } from '@mui/material';
import TextFields from '../../components/TextFields';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export const Consulta: React.FC = () => {
    
    const schema = yup.object({
        cnpj: yup.string().required('Cnjp é um campo obrigatório')
    })
    
    const { handleSubmit, formState:{ errors}, control } = useForm(
        {
            resolver: yupResolver(schema)
    });
    

    const onSubmit = (data: any) => console.log(data);
    
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
            <Box component={'form'} onSubmit={handleSubmit(onSubmit)} sx={{width:'50%', mt:'2rem', backgroundColor:'#e5e8ed', padding:'2rem', display:'flex',justifyContent:'center', flexDirection:'row'}}>
                <TextFields errors={errors} control={control} name='cnpj'label='Cnpj'></TextFields>
                <AutocompleteFields errors={errors} control = {control} name="fundos"/>
                <DataFields errors={errors} control= {control} name="data"/>
                <Button variant="outlined" sx={{color:'currentColor',  width: '80%', border: '1px solid rgba(0, 0, 0, 0.5)'}}>Enviar</Button>
            </Box>            
        </Box>       
    )
};