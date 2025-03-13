import { Box, Typography, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import logo from "./logo.png";
import logoAzul from "./logoAzul.png";

export default function Banner() {
    const [showText, setShowText] = useState(true);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const logoSrc = isMobile ? logoAzul : logo; // Altera a logo dinamicamente

    useEffect(() => {
        const interval = setInterval(() => {
            setShowText((prev) => !prev);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                flex: 1,
                background: isMobile ? "#FFFFFF" : "linear-gradient(to bottom, #0A1931, #102F6A)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: isMobile ? "#000" : "#fff",
                padding: 4,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Texto UniTL */}
            <Typography
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: isMobile ? "50px" : "130px",
                    position: "absolute",
                    transition: "opacity 1.5s ease-in-out",
                    opacity: showText ? 1 : 0,
                }}
            >
                UniTL
                <Typography variant="h6" sx={{ opacity: 0.8 }}>SISTEMA UNIFICADO</Typography>
            </Typography>

            {/* Imagem logo */}
            <Box
                component="img"
                src={logoSrc}
                alt="Logo UniTL"
                sx={{
                    width: isMobile ? "45vw" : "25vw", // Reduzi o tamanho para mobile
                    height: isMobile ? "15vh" : "30vh", // Ajuste para evitar cortes
                    position: "absolute",
                    transition: "opacity 1.5s ease-in-out",
                    opacity: showText ? 0 : 1,
                }}
            />
        </Box>
    );
}
