import React from "react";
import { Box, Typography, Button, Grid, Paper, useMediaQuery } from "@mui/material";
import heroImage from "../assets/hero-image-4.webp";

const drawerWidth = 240; // Largura do Drawer no desktop

export default function Home() {
  // Detecta se é mobile (<= 600px)
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: isMobile ? 0 : `${drawerWidth}px`,
        width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
        minHeight: "100vh",
        zIndex: 1,
        p: { xs: 2, md: 5 },
        backgroundColor: "#fff",
        overflowY: "auto",
      }}
    >
      {/* Título */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        INÍCIO
      </Typography>

      {/* Seção: Acesso Rápido */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="600">
          Acesso Rapido
        </Typography>
        <Box sx={{ borderBottom: "2px solid #ccc", width: "100px", my: 1 }} />
      </Box>

      {/* Grid de Botões: 2 colunas no desktop, 1 coluna no mobile */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "90px",
              backgroundColor: "#D9D9D9",
              color: "#000",
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: "12px",
            }}
          >
            Sigem
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "90px",
              backgroundColor: "#D9D9D9",
              color: "#000",
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: "12px",
            }}
          >
            Outro Sistema
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "90px",
              backgroundColor: "#D9D9D9",
              color: "#000",
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: "12px",
            }}
          >
            Outro Sistema
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "90px",
              backgroundColor: "#D9D9D9",
              color: "#000",
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: "12px",
            }}
          >
            Outro Sistema
          </Button>
        </Grid>
      </Grid>

      {/* Seção: Notícias */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="600">
          Notícias
        </Typography>
        <Box sx={{ borderBottom: "2px solid #ccc", width: "100px", my: 1 }} />
      </Box>

      {/* Card de Notícias - alinhado com o "Notícias" e ocupando 80% da largura em desktop */}
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F5F5F5",
          borderRadius: "12px",
          p: 3,
          width: { xs: "100%", md: "80%" },
          minHeight: "180px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          component="img"
          src={heroImage}
          alt="Notícia"
          sx={{
            width: { xs: "100%", md: "320px" },
            height: { xs: "auto", md: "180px" },
            borderRadius: 1,
            objectFit: "cover",
          }}
        />
        <Box sx={{ ml: { md: 3 }, mt: { xs: 2, md: 0 }, flex: 1 }}>
          <Typography variant="h6" fontWeight="bold">
            LGPD: o que você precisa saber para se adequar
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Casos de vazamento de dados já não são mais novidade. Para cuidar
            da privacidade dos usuários, governos, empresas e cidadãos como um
            todo se unem para criar soluções que evitem novos ataques e
            garantam a proteção dos dados...
          </Typography>
          <Typography
            component="a"
            href="#"
            color="primary"
            sx={{ mt: 1, display: "block", fontSize: "1rem" }}
          >
            Ler mais...
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
