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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Acao: React.FC = () => {

    
    const schema = yup.object({
        cnpj: yup.string().required('CNPJ é um campo obrigatório'),
        valorCota: yup
          .number()
          .required('Valor da cota é um campo obrigatório')
          .transform((originalValue, originalObject) => {
            return isNaN(originalValue) ? undefined : parseFloat(originalValue);
          })
          .positive('O valor deve ser positivo') 
          .typeError('O valor deve ser um número válido'), 
        cota: yup
          .number()
          .required('Valor da cota é um campo obrigatório')
          .transform((originalValue, originalObject) => {
            return isNaN(originalValue) ? undefined : parseFloat(originalValue);
          })
          .positive('O valor deve ser positivo') // Pode adicionar validações adicionais para números positivos aqui
          .typeError('O valor deve ser um número válido'), // Mensagem de erro para quando não for um número
        date: yup.date().nullable(),
        razaoSocial: yup.string().required("O valor da razão social precisa ser válido")
      });
    
    const { handleSubmit, formState: { errors}, control } = useForm(
        {
            resolver: yupResolver(schema)
    });


    const onSubmit = (data: any) => {
        axios.get(`http://localhost:3001/fundo/${data.razaoSocial}/${data.cnpj}`)
        .then(response => {
            const resultado = response.data;
            if (resultado === "" ){
                const requestBody = {
                    fundo: {
                      cnpj: data.cnpj,
                      razaoSocial: data.razaoSocial,
                      operacoes: []
                    }
                  }
                axios.post('http://localhost:3001/fundo', requestBody)
                .then(response => {
                console.log('Resposta da API:', response.data);
                })          
                .catch(error => {
                console.error('Erro ao fazer a requisição:', error.message);
                });
            }

            const fundoId = response.data.id
            const requestBodyOperacao = {
                    tipo: data.acoes,
                    date:  data.date,
                    cotas: data.cota,
                    valorCota: data.valorCota
                
            }
            axios.post(`http://localhost:3001/operacoes/${fundoId}`, requestBodyOperacao)
            .then(response => {
                toast.success('Operação realizada com sucesso!!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            })
            .catch(error => {
                console.error('Erro ao fazer a requisição:', error.message);  
            });
            
        })
        .catch(error => {
        console.error('Erro na requisição:', error.message);
        toast.error('Não foi possível realizar operação', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        });

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
                mb:'2rem',
        }}
        >
            <Box component={'form'} onSubmit={handleSubmit(onSubmit)} 
                sx={{borderRadius: '25px', 
                width:'50%',
                mt:'2rem',
                backgroundColor:'#e5e8ed',
                padding:'2rem', 
                display:'flex',
                justifyContent:'center',
                flexDirection:'column',
                alignItems:'center',
                '@media screen and (max-width: 768px)': {
                    width: '70%', 
                    flexDirection: 'column',  
            }}}
                >
                <h2>Realize Sua Ação</h2>
                <TextFields errors={errors} control={control}  name='cnpj'label='Cnpj'></TextFields>
                <AutocompleteFields errors={errors} control = {control} name="razaoSocial"/>
                <DataFields errors={errors} control={control} name="date"/>
                <SelectFields
                    errors={errors}
                    label="Ação"
                    control = {control}
                    name = "acoes"
                />
                <TextFields errors={errors} control={control} name='cota' label='Quantidade de Cotas'></TextFields>
                <TextFields  errors={errors} control={control} name='valorCota'label='Valor Cota' ></TextFields>
                <Button type="submit" variant="contained" sx={{color:'currentColor',  width: '80%', border: '1px solid rgba(0, 0, 0, 0.5)'}}>Enviar</Button>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </Box>            
        </Box>        
    )
};