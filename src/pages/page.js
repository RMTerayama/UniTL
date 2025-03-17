import React from "react";
import Navbar from "../components/layout/navbar/navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function Page() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Navbar com largura fixa */}
      <Navbar />

      {/* Área principal que ocupa o restante da largura */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#fff",
          p: { xs: 2, md: 5 },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
