import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import heroImage from "../assets/hero-image-4.webp";
// Se estiver usando axios, importe:
import axios from "axios";

export default function Home() {

  const handleSigemClick = async () => {
    try {
        const token = localStorage.getItem('token');
        
        if (!token) {
            alert("Token não encontrado. Faça login no sistema unificado primeiro.");
            return;
        }

        // 🔹 Define a URL do SSO dinamicamente para funcionar localmente e no servidor remoto
        const ssoUrl = process.env.REACT_APP_SSO_URL || "http://172.18.2.49/sigem/api/login-jwt/auth/sso.php";

        const response = await axios.post(ssoUrl, {}, {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true // 🔹 Garante que os cookies sejam enviados e recebidos
        });

        console.log("Resposta do SSO:", response.data);

        if (response.data.redirect) {
            console.log(`Redirecionando para: ${response.data.redirect} em 30 segundos...`);

            // 🔹 Aguarda 1 segundo para garantir que o cookie seja salvo no navegador
            await new Promise(resolve => setTimeout(resolve, 1000));

            // 🔹 Redireciona para a página protegida após 30 segundos
            setTimeout(() => {
                window.location.href = `http://172.18.2.49${response.data.redirect}`;
            }, 30000); // 30 segundos
        } else {
            alert("Erro ao obter URL de redirecionamento.");
        }
    } catch (error) {
        console.error(error);
        alert("Não foi possível efetuar login no SIGEM via SSO.");
    }
  };


  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        p: { xs: 2, md: 5 },
      }}
    >
      {/* Título */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        INÍCIO
      </Typography>

      {/* Seção: Acesso Rápido */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="600">
          Acesso Rápido
        </Typography>
        <Box sx={{ borderBottom: "2px solid #ccc", width: "100px", my: 1 }} />
      </Box>

      {/* Grid de Botões */}
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
            onClick={handleSigemClick}
          >
            Sigem
          </Button>
        </Grid>
        {/* ...outros botões */}
      </Grid>

      {/* Seção: Notícias */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="600">
          Notícias
        </Typography>
        <Box sx={{ borderBottom: "2px solid #ccc", width: "100px", my: 1 }} />
      </Box>

      {/* Card de Notícias */}
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
            Casos de vazamento de dados já não são mais novidade...
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
