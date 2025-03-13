import { Container, Box, useMediaQuery } from "@mui/material";
import Banner from "../components/bannerLogin/banner";
import Formulario from "../components/formLogin/form";
import backgroundImage from "./backgroundLogin.png"; // Caminho da imagem

export default function Login() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: isMobile ? "#FFFFFF" : "linear-gradient(to right, #050A24 50%, #FFFFFF 50%)",
                position: "relative",
            }}
        >
            {/* Imagem de fundo apenas na parte azul */}
            {!isMobile && (
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "50%",
                        height: "100vh",
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.3, // Deixa a imagem mais sutil
                        zIndex: 0, // Fica atrás do conteúdo
                    }}
                />
            )}

            {/* Container do conteúdo */}
            <Box
    sx={{
        height: "80vh",
        width: "90vw",
        maxWidth: isMobile ? "100vw":"75vw",
        width: isMobile ? "100vw":"75vw",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        backgroundColor: "#fff",
        borderRadius: 10, // Mantém as bordas arredondadas
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
        backgroundClip: "padding-box", // Evita quinas brancas
    }}
>
                <Banner />
                <Formulario />
            </Box>
        </Container>
    );
}
