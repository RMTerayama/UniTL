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
import { Outlet } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery'; // Hook para detectar o tamanho da tela
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; // Ícone de menu para dispositivos móveis
import { AppBar } from '@mui/material';

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
  const [mobileOpen, setMobileOpen] = React.useState(false); // Estado para controlar o drawer em dispositivos móveis
  const open = Boolean(anchorEl); // Verifica se o menu está aberto

  // Verifica se a tela é pequena (dispositivos móveis)
  const isMobile = useMediaQuery('(max-width:600px)');

  // Função para abrir o menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Função para fechar o menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Função para alternar o drawer em dispositivos móveis
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logo = (<Typography sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
    <h1>UniTL</h1>
    <p>SISTEMA UNIFICADO</p>
  </Typography>);

  // Conteúdo do Drawer
  const drawerContent = (
    <>
      
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
                    style: { backgroundColor: "#d9d9d9" }
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
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 2,
        backgroundColor: 'transparent',
        display: "flex",
        flexDirection: "row",
      }}>
        <Divider variant="middle" sx={{ borderBottomWidth: 2, borderColor: 'white' }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <span><img href="" alt='perfil do usuário'></img></span>
          <span>Nome do usuário <br />E-mail do usuário</span>
        </Box>
      </Box>
    </>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: !isMobile ? '100vh' : 'auto', // Garante que o gradiente cubra toda a altura da tela
        width: !isMobile ? drawerWidth : '10%',
        background: 'linear-gradient(180deg, #050A24, #0E1C58)', // Gradiente de #050A24 para #0E1C58
      }}
    >
      <CssBaseline />
      {/* Drawer para dispositivos móveis */}
      {isMobile && (
        <AppBar position='fixed' sx={{ background: 'linear-gradient(180deg, #050A24, #0E1C58)', display: "flex", justifyContent: 'center', flexDirection: "row" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ position: 'fixed', top: 10, left: 10, zIndex: 1300, color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <span>
              {logo}
            </span>
          </Toolbar>
        </AppBar>
      )}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'} // Alterna entre temporário e permanente
        open={isMobile ? mobileOpen : true} // Controla a visibilidade do drawer em dispositivos móveis
        onClose={handleDrawerToggle} // Fecha o drawer em dispositivos móveis
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'linear-gradient(180deg, #050A24, #0E1C58)', // Fundo transparente para o gradiente aparecer
            color: 'white',
          },
        }}
        anchor="left"
      >
        {!isMobile && ( <Box sx={{paddingTop: 2}}>
          {logo}
          <Divider variant="middle" sx={{ borderBottomWidth: 2, borderColor: 'white' }} />
        </Box>)}
        {drawerContent}
      </Drawer>
      <Outlet />
    </Box>
  );
}