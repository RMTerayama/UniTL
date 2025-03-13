import React, { useState } from "react";
import { Box, Avatar, TextField, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, Typography, Paper, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";

const users = [
  { name: "Fulano de Tal", email: "fulano.tal@treslagoas.msg.gov.br", avatar: "https://via.placeholder.com/50" },
  { name: "Fulano de Tals", email: "fulano.tals@treslagoas.msg.gov.br", avatar: "https://via.placeholder.com/50" },
];

export default function Chat() {
  const [activeUser, setActiveUser] = useState(null);

  const handleUserClick = (index) => {
    setActiveUser(index); // Set the clicked user as active
  };

  return (
    <Box display="flex" height="100vh" bgcolor="#f5f5f5">
      {/* Sidebar */}
      <Box width="auto" bgcolor="#fff" p={3} boxShadow={3} borderRadius={2}>
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          Mensageria
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Pesquisar por usuário"
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            borderRadius: 2,
            bgcolor: "#f0f0f0",
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />
    <List sx={{ marginTop: 2, cursor: "pointer" }}>
        {users.map((user, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleUserClick(index)} // Handle the user click
              sx={{
                borderRadius: 2,
                my: 1,
                bgcolor: activeUser === index ? "#d0e4ff" : "#f9f9f9", // Highlight the active user
                transition: "background-color 0.3s",
                "&:hover": {
                  bgcolor: "#e0e0e0",
                },
                boxShadow: activeUser === index ? 3 : 0, // Add shadow when active
              }}
            >
              <ListItemAvatar>
                <Avatar src={user.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography fontWeight="bold">{user.name}</Typography>}
                secondary={user.email}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Chat Area */}
      <Box flex={1} display="flex" flexDirection="column" p={3} gap={2} width={"68vw"}>
        <Box flex={1} display="flex" flexDirection="column" gap={2} overflow="auto">
          {/* Mensagem recebida */}
          <Box display="flex" alignItems="center">
            <Avatar src="https://via.placeholder.com/50" sx={{ mr: 1 }} />
            <Paper elevation={2} sx={{ p: 2, borderRadius: 2, bgcolor: "#f1f1f1", maxWidth: "75%" }}>
              <Typography variant="body1">Olá! Gostaria de saber quais documentos são necessários para solicitar um alvará de funcionamento?</Typography>
            </Paper>
          </Box>
          {/* Mensagem enviada */}
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Paper elevation={2} sx={{ p: 2, borderRadius: 2, bgcolor: "#cfe2ff", maxWidth: "75%" }}>
              <Typography variant="body1">Para solicitar um alvará, você precisa de CPF, comprovante de endereço, contrato social...</Typography>
            </Paper>
            <Avatar src="https://via.placeholder.com/50" sx={{ ml: 1 }} />
          </Box>
        </Box>

        <Divider sx={{ marginY: 2 }} />

        {/* Input de mensagem */}
        <Box display="flex" alignItems="center">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Digite sua mensagem..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              borderRadius: 2,
              bgcolor: "#f0f0f0",
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
