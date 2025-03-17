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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import useMediaQuery from '@mui/material/useMediaQuery'; // Hook para detectar o tamanho da tela
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from '@mui/material';
import styles from "./navbar.module.css";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'; // Ícone de perfil
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link, useNavigate } from 'react-router-dom';




export default function Navbar() {
  const navigate = useNavigate();

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

  const logo = (
    <Typography className={styles.logo}>
      <h1 style={{ fontStyle: "italic", fontWeight: 800 }}>UniTL</h1>
      <p>SISTEMA UNIFICADO</p>
    </Typography>
  );

  // Estado para controlar o menu do footer
  const [footerAnchorEl, setFooterAnchorEl] = React.useState(null);
  const isFooterMenuOpen = Boolean(footerAnchorEl);

  // Função para abrir o menu do footer
  const handleFooterMenuOpen = (event) => {
    setFooterAnchorEl(event.currentTarget);
  };

  // Função para fechar o menu do footer
  const handleFooterMenuClose = () => {
    setFooterAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // 🚀 Remove o JWT do armazenamento
    navigate("/login"); // 🚀 Redireciona para a tela de login
  };

  const footer = (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        width: '100%',
        padding: 2,
        backgroundColor: 'transparent',
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          color: 'white',
          cursor: 'pointer', // Indica que o componente é clicável
        }}
        onClick={handleFooterMenuOpen} // Abre o menu ao clicar
      >
        <span className={styles.image_user}>
          <img href="" alt="perfil do usuário" />
        </span>
        <span className={styles.info_user}>
          Caveira <br />
          meia_noite@teconto.com
        </span>
      </Box>

      {/* Menu do footer */}
      <Menu
        PaperProps={{
          style: { backgroundColor: "#d9d9d9" }
        }}
        anchorEl={footerAnchorEl}
        open={isFooterMenuOpen}
        onClose={handleFooterMenuClose}
        anchorOrigin={{
          vertical: 'top', // Posiciona o menu acima do elemento clicado
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom', // Faz o menu "crescer" para cima
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleFooterMenuClose}>
          <ListItemIcon>
            <PersonOutlineOutlinedIcon /> {/* Ícone de perfil */}
          </ListItemIcon>
          <ListItemText>Perfil</ListItemText>
        </MenuItem>

        {/* Opção 2 */}
        <MenuItem onClick={handleFooterMenuClose}>
          <ListItemIcon>
            <VerifiedUserIcon /> {/* Ícone de configurações */}
          </ListItemIcon>
          <ListItemText>Políticas de privacidade</ListItemText>
        </MenuItem>

        {/* Opção 3 */}
        <MenuItem onClick={handleFooterMenuClose}>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Ajustes</ListItemText>
        </MenuItem>

        <Divider variant="middle" sx={{ borderBottomWidth: 2, borderColor: 'black' }} />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>Sair</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );

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
                  <ListItemText sx={{ paddingLeft: '0' }}>
                    <>Sistemas <KeyboardArrowRightIcon /></>
                  </ListItemText>
                </ListItemButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  PaperProps={{
                    style: { backgroundColor: "#d9d9d9" }
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  MenuListProps={{
                    'aria-labelledby': 'sistemas-button',
                  }}
                >
                  {sistemasMenuItems.map((menuItem, idx) => (
                    <MenuItem key={idx} onClick={handleClose}>
                      <Link to={menuItem.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {menuItem.text}
                      </Link>
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
      {footer} {/* Footer inserido aqui */}
    </>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: !isMobile ? '100vh' : 'auto',
        width: !isMobile ? drawerWidth : '10%',
        background: 'linear-gradient(180deg, #050A24, #0E1C58)',
      }}
    >
      <CssBaseline />
      {/* Drawer para dispositivos móveis */}
      {isMobile && (
        <AppBar position='fixed' sx={{ background: 'linear-gradient(180deg, #050A24, #0E1C58)', display: "flex", justifyContent: 'center', flexDirection: "row", height: '80px' }}>
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
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'linear-gradient(180deg, #050A24, #0E1C58)',
            color: 'white',
          },
        }}
        anchor="left"
      >
        {!isMobile && (<Box sx={{ paddingTop: 2 }}>
          {logo}
          <Divider variant="middle" sx={{ borderBottomWidth: 2, borderColor: 'white' }} />
        </Box>)}
        {drawerContent}
      </Drawer>
    </Box>
  );
}