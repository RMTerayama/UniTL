import React, { useState } from 'react';
import { Box, FormGroup, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import ShortTextIcon from '@mui/icons-material/ShortText';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const sistemas = [
    'Sistema 1',
    'Sistema 2',
    'Sistema 3',
    'Sistema 4',
    'Sistema 5',
    'Sistema 6',
];

const labels_usuario = ["Label 1", "Label 2", "Label 3", "Label 4"];

export default function Ajustes() {

    const [isDisabled, setIsDisabled] = useState(true);

    const [nomeSistema, setNomeSistema] = useState([]);

    // Função para habilitar/desabilitar os campos
    const handleEditClick = () => {
        setIsDisabled(!isDisabled); // Alterna entre true e false
    };

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setNomeSistema(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return <>

        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "#fff",
            }}
        >
            <Typography variant="h1" fontWeight="bold" gutterBottom sx={{ fontSize: "25px", fontFamily: "Poppins", marginBottom: "4rem" }}>
                <strong>Ajustes</strong>
            </Typography>
            <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center", borderRadius: "15px" }}>

                <Box component="form" sx={{ backgroundColor: "rgb(217, 217, 217, 0.5)", width: "60%", height: "750px", borderRadius: "15px", marginLeft: "40px" }}>
                    <FormGroup sx={{ margin: '3rem 4rem 3rem 4rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography
                                variant="h2"
                                sx={{ fontSize: '25px', fontFamily: 'Poppins', fontWeight: 'bold' }}
                            >
                                Usuário
                            </Typography>

                            {/* Botão de editar */}
                            <Button
                                sx={{ color: 'white', backgroundColor: '#007aff' }}
                                onClick={handleEditClick} // Chama a função ao clicar
                                variant='contained'
                            >
                                <span>Editar</span>
                                <EditNoteIcon sx={{ fontSize: '20px', marginLeft: '5px' }} />
                            </Button>
                        </Box>

                        <Grid container spacing={4} sx={{ margin: '1rem 0 0 3rem' }}>
                            {/* Campos TextField */}
                            {labels_usuario.map((index) => (
                                <Grid item size={6} key={index}>
                                    <TextField
                                        disabled={isDisabled} // Controlado pelo estado
                                        fullWidth
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '8px', // Bordas arredondadas
                                                backgroundColor: 'white',
                                            },
                                            '& .MuiOutlinedInput-root.Mui-disabled': {
                                                backgroundColor: 'transparent', // Fundo transparente quando desabilitado
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'transparent', // Remove a borda padrão
                                            },
                                        }}
                                        label={`${index}`}
                                        variant="outlined"
                                        defaultValue="asdasd"
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </FormGroup>

                    <Box sx={{ borderBottom: "5px solid #ccc", width: "50%", my: 3, marginLeft: "4rem" }} />

                    <FormGroup sx={{ margin: "3rem 4rem 0 4rem", width: "80%" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography variant="h2" sx={{ fontSize: "25px", fontFamily: "Poppins", fontWeight: "bold", }}>
                                Solicitar acesso a sistemas
                            </Typography>
                        </Box>

                        <Box sx={{ margin: '1rem 0 0 3rem', display: "flex", justifyContent: "space-between" }}>
                            <FormControl
                                sx={{
                                    
                                    width: '30%',
                                    '& .MuiOutlinedInput-root': {
                                        backgroundColor: 'white', // Cor de fundo
                                        borderRadius: '8px', // Bordas arredondadas
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent', // Remove a borda padrão
                                    },
                                }}
                            >
                                <InputLabel id="nome-sistemas">Sistema</InputLabel>
                                <Select
                                    labelId="nome-sistemas"
                                    multiple
                                    value={nomeSistema}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Sistema" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {sistemas.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={nomeSistema.includes(name)} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <TextField
                                id="text-justificativa"
                                label="Justificativa"
                                placeholder="Justificativa"
                                multiline
                                rows={5}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        backgroundColor: 'white', // Fundo branco
                                        borderRadius: '8px', // Bordas arredondadas
                                        position: 'relative', // Permite posicionar o ícone de forma absoluta
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent', // Remove a borda padrão
                                    },
                                    width: "30%",
                                    
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <ShortTextIcon
                                            sx={{
                                                transform: 'rotate(-45deg)', // Rotaciona o ícone em 45 graus
                                                position: 'absolute', // Posiciona o ícone de forma absoluta
                                                bottom: 0, // Distância do fundo
                                                right: 0, // Distância da direita
                                                fontSize: '24px', // Tamanho do ícone
                                                color: 'rgb(0, 0, 0, 0.4)', // Cor do ícone
                                            }}
                                        />
                                    ),
                                }}
                            />
                            <Button sx={{ color: 'white', backgroundColor: '#007aff', height: "35px", textTransform: 'none' }} variant='contained'>Solicitar</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Box>
        </Box>
    </>
}