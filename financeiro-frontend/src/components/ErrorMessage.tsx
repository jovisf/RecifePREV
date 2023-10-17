import React from 'react'
import { Box, Typography } from '@mui/material'

interface ErrorMessageProps {
    message: string
  }


const ErrorMessage:React.FC<ErrorMessageProps> = (props) => {
  return (
    <Box sx={{
        display:'flex',
        alignItems:'center',
        gap:'5px',
        mt:'6px'

    }}>
        <Typography color='error.main' variant='h1' fontSize='14px' >
            {props.message}
        </Typography>
    </Box>
  )
}

export default ErrorMessage