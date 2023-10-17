import React from 'react'
import DataFields from '../../components/DataFields';
import AutocompleteFields from '../../components/AutocompleteFields';
import { Box, Button } from '@mui/material';
import TextFields from '../../components/TextFields';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const Consulta: React.FC = () => {

    const [quantidadeCota, setQuantidadeCota] = useState(null);
    const [valorMedio, setValorMedio] = useState(null);
    const [cnpj, setcnpj] = useState(null);
    const [razaoSocial, setRazaoSocial] = useState(null);
    const [valorUnitario, setValorUnitario] = useState(null)
    const [valorRetorno, setValorRetorno] = useState(null)
    const [saldo, setSaldo] = useState(null)

    const schema = yup.object({
        cnpj: yup.string().required('Cnjp é um campo obrigatório'),
        date: yup.date().nullable(),
        razaoSocial: yup.string().required("O valor da razão social precisa ser válido")
    })
    
    const { handleSubmit, formState:{ errors}, control } = useForm(
        {
            resolver: yupResolver(schema)
    });
    

    const onSubmit = (data: any) => {
        setRazaoSocial(data.razaoSocial)
        setcnpj(data.cnpj)
        axios.get(`http://localhost:3001/fundo/${data.razaoSocial}/${data.cnpj}`)
        .then(response => {
            const resultado = response.data;
            axios.get(`http://localhost:3001/consulta/${resultado.id}`)
            .then(consulta => {
                setQuantidadeCota(consulta.data.quantidadeCotas);
                setValorMedio(consulta.data.valorMedio)
                setValorUnitario(consulta.data.valorUnitario)
                setValorRetorno(consulta.data.retorno)
                setSaldo(consulta.data.saldo)
            })
        })
        .catch(error => {
            console.error('Erro na requisição:', error.message);
        });
    };
    
    return(
        <Box 
            id="container-consulta" 
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                backgroundColor:'black',
                width:'100%',
                pb:'2rem',
        }}
        >
            <h2 style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    color:'white'
                }}>Realize sua Consulta</h2>
            <Box component={'form'} onSubmit={handleSubmit(onSubmit)} sx={{borderRadius: '25px', width:'50%', mt:'2rem', backgroundColor:'#e5e8ed', padding:'2rem', display:'flex',justifyContent:'center', flexDirection:'row', alignItems:'center', '@media screen and (max-width: 900px)': {
                    width: '70%',
                    flexDirection: 'column',  
                    mt:0
            }}}>
                <TextFields errors={errors} control={control}  name='cnpj'label='Cnpj'></TextFields>
                <TextFields errors={errors} control={control}  name='razaoSocial'label='Razão Social'></TextFields>
                <DataFields errors={errors} control={control} name="date"/>
                <Button type="submit" variant="contained" sx={{color:'currentColor',  width: '80%', border: '1px solid rgba(0, 0, 0, 0.5)'}}>Enviar</Button>
                
            </Box>
                    {(quantidadeCota != null && valorMedio != null) && (
                         <Box
                         id="container-dados" 
                         sx={{borderRadius: '25px', width:'90%', mt:'2rem', backgroundColor:'#e5e8ed', display:'flex',justifyContent:'center', flexDirection:'row', alignItems:'center', '@media screen and (max-width: 900px)': {
                             width: '90%',
                             flexDirection: 'column',  
                             mt:'5vh'
                        }}}>
                            <Box
                            id="container-info" 
                            sx={{borderRadius: '25px', width:'50%',gap: '2rem', backgroundColor:'#e5e8ed', display:'flex',justifyContent:'space-evenly', flexDirection:'row', alignItems:'center', '@media screen and (max-width: 900px)': {
                                width: '70%',
                                flexDirection: 'column',  
                            }}}>
                                <Box sx={{display:'flex', flexDirection:'column',alignItems: 'center'}}>
                                    <h3 style={{flexWrap: 'nowrap'}}>CNPJ:</h3>
                                    <p>{cnpj}</p>
                                </Box>
                                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                                    <h3 style={{flexWrap: 'nowrap'}}>Razão Social:</h3>
                                    <p>{razaoSocial}</p>
                                </Box>
                                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                                    <h3 style={{flexWrap: 'nowrap'}}>Valor Unitário Cota:</h3>
                                    <p>{valorUnitario}</p>
                                </Box>
                                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                                    <h3 style={{flexWrap: 'nowrap'}}>Número de cotas:</h3>
                                    <p>{quantidadeCota}</p>
                                </Box>
                                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                                    <h3 style={{flexWrap: 'nowrap'}}>Preço médio:</h3>
                                    <p>{valorMedio}</p>
                                </Box>
                                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                                    <h3 style={{flexWrap: 'nowrap'}}>Retorno da operação</h3>
                                    <p>{valorRetorno}</p>
                                </Box>
                                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                                    <h3 style={{flexWrap: 'nowrap'}}>Saldo de aplicação no Fundo:</h3>
                                    <p>{saldo}</p>
                                </Box>
                            
                            </Box>
                        </Box>
                    )}
        </Box>       
    )
};