import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu'; // Componente Menu
import MenuItem from '@mui/material/MenuItem'; // Itens do Menu
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Outlet } from 'react-router-dom'

const drawerWidth = 240;
const itemsNav1 = [{ text: "Início", icon: <HomeOutlinedIcon /> }, { text: "Mensagem", icon: <EmailOutlinedIcon /> }];
const itemsNav2 = [
  { text: "Sistemas", icon: <BackupTableOutlinedIcon /> },
  { text: "Suporte", icon: <HelpOutlineOutlinedIcon /> },
  { text: "Ajustes", icon: <SettingsOutlinedIcon /> },
];

// Links para os sistemas
const sistemasMenuItems = [
  { text: "Sistema 1", link: "#" },
  { text: "Sistema 2", link: "#" },
  { text: "Sistema 3", link: "#" },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null); // Estado para controlar o menu
  const open = Boolean(anchorEl); // Verifica se o menu está aberto

  // Função para abrir o menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Função para fechar o menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh', // Garante que o gradiente cubra toda a altura da tela
        width: drawerWidth,
        background: 'linear-gradient(180deg, #050A24, #0E1C58)', // Gradiente de #050A24 para #0E1C58
      }}
    >
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'transparent', // Fundo transparente para o gradiente aparecer
            color: 'white',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
          <Typography sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
            <h1>UniTL</h1>
            <p>SISTEMA UNIFICADO</p>
          </Typography>
        </Box>
        <Divider variant="middle" sx={{ borderBottomWidth: 2, borderColor: 'white' }} />
        <List>
          {itemsNav1.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton
                sx={{
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)', transition: 'background-color 0.3s' },
                }}
              >
                <ListItemIcon sx={{ minWidth: '40px', color: 'white', fontSize: 30 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ paddingLeft: '0' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider variant="middle" sx={{ borderBottomWidth: 2, borderColor: 'white' }} />
        <List>
          {itemsNav2.map((item, index) => (
            <ListItem key={index}>
              {item.text === "Sistemas" ? (
                <>
                  <ListItemButton
                    onClick={handleClick} // Abre o menu ao clicar
                    sx={{
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)', transition: 'background-color 0.3s' },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: '40px', color: 'white', fontSize: 30 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ paddingLeft: '0' }} />
                  </ListItemButton>
                  <Menu
                    anchorEl={anchorEl} // Elemento que abre o menu
                    open={open} // Controla a visibilidade do menu
                    onClose={handleClose} // Fecha o menu
                    anchorOrigin={{
                      vertical: 'top', // Posiciona o menu no topo do botão
                      horizontal: 'right', // Posiciona o menu à direita do botão
                    }}
                    PaperProps={{
                      style: {backgroundColor:"#d9d9d9"}
                    }}
                    transformOrigin={{
                      vertical: 'top', // Alinha o menu com o topo do botão
                      horizontal: 'left', // Alinha o menu com a esquerda do botão
                    }}
                    MenuListProps={{
                      'aria-labelledby': 'sistemas-button', // Acessibilidade
                    }}
                    
                  >
                    {sistemasMenuItems.map((menuItem, idx) => (
                      <MenuItem key={idx} onClick={handleClose}>
                        <a href={menuItem.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                          {menuItem.text}
                        </a>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <ListItemButton
                  sx={{
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)', transition: 'background-color 0.3s' },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: '40px', color: 'white', fontSize: 30 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ paddingLeft: '0' }} />
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
        <Divider variant="middle" sx={{ borderBottomWidth: 2, borderColor: 'white' }} />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            padding: 2,
            backgroundColor: 'transparent', // Fundo transparente para o gradiente aparecer
            display: 'flex',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <Typography sx={{ fontSize: '14px', textAlign: 'center' }}>
            © 2025 UniTL - Todos os direitos reservados
          </Typography>
        </Box>
      </Drawer>
      <Outlet />
    </Box>
  );
}