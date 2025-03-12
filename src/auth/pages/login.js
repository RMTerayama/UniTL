import { Container, Box } from "@mui/material";
import Banner from "../components/bannerLogin/banner";
import Formulario from "../components/formLogin/form";

export default function Login() {
    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to right, #050A24 50%, #FFFFFF 50%)",
            }}
        >
            <Box
                sx={{
                    height: "60vh",

                    width: "80vw",
                    maxWidth: 1200,
                    display: "flex",
                    backgroundColor: "#fff",
                    borderRadius: 3,
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                }}
            >
                <Banner />
                <Formulario />
            </Box>
        </Container>
    );
}
