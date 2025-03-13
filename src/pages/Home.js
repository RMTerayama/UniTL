import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
    const navigate = useNavigate(); // 🚀 Hook para navegação

    const handleLogout = () => {
        localStorage.removeItem("token"); // 🚀 Remove o JWT do armazenamento
        navigate("/"); // 🚀 Redireciona para a tela de login
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Bem-vindo à Home!
            </Typography>
            <Typography variant="body1">Você está autenticado.</Typography>

            <Button 
                variant="contained" 
                color="error" 
                onClick={handleLogout} // 🚀 Botão para logout
            >
                Logout
            </Button>
        </Box>
    );
}
