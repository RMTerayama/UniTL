import { useState } from "react";
import { Box, TextField, IconButton, InputAdornment, Button, Link, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Formulario() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Box
            sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 4,
            }}
        >
            <Box sx={{ width: "100%", maxWidth: 450 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                    Acessar
                </Typography>

                <TextField fullWidth label="Usuário" variant="outlined" placeholder="Usuario.exemplo" sx={{ mb: 3 }} />
                <Link href="#" variant="body2" sx={{ display: "block", textAlign: "right", mb: 1, color: "#1976d2" }}>
                    Esqueceu sua senha?
                </Link>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                    <TextField
                        fullWidth
                        label="Senha"
                        variant="outlined"
                        placeholder="Insira a sua senha"
                        type={passwordVisible ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={togglePasswordVisibility} edge="end">
                                        {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

               

                <Button fullWidth variant="contained" color="primary" sx={{ mb: 2, fontWeight: "bold" }}>
                    Criar Conta
                </Button>

                <Button fullWidth variant="contained" color="success" sx={{ fontWeight: "bold", backgroundColor: "#E0EAFD", color: "#1976d2" }}>
                    Entrar
                </Button>
            </Box>
        </Box>
    );
}
