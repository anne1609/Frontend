
import * as React from 'react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

import "./Formulario2.css";
function Formulario2() {
  return (
    <>
    <Container maxWidth="sm">
        <Box
            sx={{ display: "grid", gap: 2 }}
            component="form"
            autoComplete="off"
        >
            <TextField
            id="city"
            label="Titulo"
            variant="outlined"
            size="small"
            required

            />
            <TextField
            id="city"
            label="Descripcion"
            variant="outlined"
            size="small"
            required
            sx={{
                '& label.Mui-focused': {
                  color: '#001F3F', // Cambiar color del texto cuando está enfocado
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#001F3F', // Cambiar color del borde
                  },
                },
              }}
            />
        

            <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<SaveIcon />}
            style={{
                backgroundColor: '#001F3F', // Cambiar color a verde (puedes cambiar a cualquier color)
                textTransform: 'uppercase', // Convertir texto a mayúsculas
              }}>
                Guardar cambios
            </Button>
            </Stack>


        </Box>
        </Container>
    </>
  );
}

export default Formulario2;
