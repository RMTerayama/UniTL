import { Box, Typography } from "@mui/material";

export default function Banner() {
    return (
        <Box
            sx={{
                flex: 1,
                background: "linear-gradient(to bottom, #0A1931, #102F6A)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                padding: 4,
            }}
        >
            <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center",fontSize:"130px" }}>
                UniTL
                <Typography variant="h6" sx={{ opacity: 0.8 }}>SISTEMA UNIFICADO</Typography>
            </Typography>
        </Box>
    );
}
