import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🚀 Para redirecionamento após login
import axios from "axios"; // 🚀 Biblioteca para requisições HTTP
import { 
    Box, TextField, IconButton, InputAdornment, Button, Link, Typography, useMediaQuery 
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Formulario() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState(""); // 🚀 Alterado de "senha" para "password" para seguir o backend
    const isMobile = useMediaQuery("(max-width: 768px)");
    const navigate = useNavigate(); // 🚀 Hook para navegação

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // 🚀 Função para fazer login e obter o token JWT
    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:4000/auth/login", {
                usuario, 
                password // 🚀 Alterado para "password" conforme esperado pelo backend
            });

            const token = response.data.access_token;

            // 🚀 Armazena o token no localStorage
            localStorage.setItem("token", token);

            // 🚀 Redireciona para a Home
            console.log("Login bem sucedido");
            navigate("/");
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Falha ao fazer login. Verifique suas credenciais.");
        }
    };

    return (
        <Box
            sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 4,
                flexDirection: isMobile ? "column" : "row",
            }}
        >
            <Box sx={{ width: "100%", maxWidth: 450 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                    Acessar
                </Typography>

                {/* 🚀 Captura o valor do usuário */}
                <TextField
                    fullWidth
                    label="Usuário"
                    variant="outlined"
                    placeholder="Usuario.exemplo"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    sx={{ mb: 3 }}
                />

                <Link href="#" variant="body2" sx={{ display: "block", textAlign: "right", mb: 1, color: "#1976d2" }}>
                    Esqueceu sua senha?
                </Link>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                    {/* 🚀 Captura o valor da senha */}
                    <TextField
                        fullWidth
                        label="Senha"
                        variant="outlined"
                        placeholder="Insira a sua senha"
                        type={passwordVisible ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

                {/* 🚀 Agora o botão de login faz a requisição ao backend */}
                <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    sx={{ fontWeight: "bold", backgroundColor: "#E0EAFD", color: "#1976d2" }}
                    onClick={handleLogin}
                >
                    Entrar
                </Button>
            </Box>
        </Box>
    );
}
