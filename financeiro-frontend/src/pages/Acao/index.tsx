import React, { useEffect, useState  } from "react"
import { SelectChangeEvent } from '@mui/material/Select';
import { Box, Typography, Button } from '@mui/material';
import TextFields from '../../components/TextFields';
import SelectFields from '../../components/SelectFields';
import DataFields from '../../components/DataFields';
import AutocompleteFields from '../../components/AutocompleteFields';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useForm } from "react-hook-form";


export const Acao: React.FC = () => {

    
    const schema = yup.object({
        cnpj: yup.string().required('CNPJ é um campo obrigatório'),
        valorCota: yup
          .number()
          .required('Valor da cota é um campo obrigatório')
          .transform((originalValue, originalObject) => {
            return isNaN(originalValue) ? undefined : parseFloat(originalValue);
          })
          .positive('O valor deve ser positivo') // Pode adicionar validações adicionais para números positivos aqui
          .typeError('O valor deve ser um número válido'), // Mensagem de erro para quando não for um número
        cota: yup
          .number()
          .required('Valor da cota é um campo obrigatório')
          .transform((originalValue, originalObject) => {
            return isNaN(originalValue) ? undefined : parseFloat(originalValue);
          })
          .positive('O valor deve ser positivo') // Pode adicionar validações adicionais para números positivos aqui
          .typeError('O valor deve ser um número válido'), // Mensagem de erro para quando não for um número
        data: yup.date().nullable(),
        fundos: yup.string().required("O valor da razão social precisa ser válido")
      });
    
    const { handleSubmit, formState: { errors}, control } = useForm(
        {
            resolver: yupResolver(schema)
    });



    const onSubmit = (data: any) => console.log(data);
    


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
            <Box component={'form'} onSubmit={handleSubmit(onSubmit)} sx={{width:'50%', mt:'2rem', backgroundColor:'#e5e8ed', padding:'2rem', display:'flex',justifyContent:'center', flexDirection:'column'}}>
                <Typography component='h2'> Realize a sua ação</Typography>
                <TextFields errors={errors} control={control} name='cnpj'label='Cnpj'></TextFields>
                <AutocompleteFields errors={errors} control = {control} name="fundos"/>
                <DataFields errors={errors} control= {control} name="data"/>
                <SelectFields
                    errors={errors}
                    label="Ação"
                    control = {control}
                    name = "acoes"
                />
                <TextFields errors={errors} control={control} name='cota' label='Quantidade de Cotas'></TextFields>
                <TextFields  errors={errors} control={control} name='valorCota'label='Valor Cota' ></TextFields>
                <Button type="submit" variant="contained" sx={{color:'currentColor',  width: '80%', border: '1px solid rgba(0, 0, 0, 0.5)'}}>Enviar</Button>
            </Box>            
        </Box>        
    )
};