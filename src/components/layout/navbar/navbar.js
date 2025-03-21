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
import { Link, useNavigate, NavLink } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import user from "./user.png"

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null); // Estado para controlar o menu
  const [mobileOpen, setMobileOpen] = React.useState(false); // Estado para controlar o drawer em dispositivos móveis
  const [isRotated, setIsRotated] = React.useState(false); // Estado para controlar a rotação do perfil
  const [isRotatedSistemas, setIsRotatedSistemas] = React.useState(false); // Estado para controlar a rotação do perfil
  const open = Boolean(anchorEl); // Verifica se o menu está aberto

  const drawerWidth = 250;
  const itemsNav1 = [{ text: "Início", icon: <HomeOutlinedIcon />, route: "/home" }, { text: "Mensagem", icon: <EmailOutlinedIcon />, route: "/chat" }];
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

  const navigate = useNavigate();

  // Verifica se a tela é pequena (dispositivos móveis)
  const isMobile = useMediaQuery('(max-width:600px)');

  // Função para abrir o menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsRotatedSistemas(!isRotatedSistemas);
  };

  // Função para fechar o menu
  const handleClose = () => {
    setAnchorEl(null);
    setIsRotatedSistemas(!isRotatedSistemas);
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
    setIsRotated(!isRotated);
  };

  // Função para fechar o menu do footer
  const handleFooterMenuClose = () => {
    setFooterAnchorEl(null);
    setIsRotated(!isRotated);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // 🚀 Remove o JWT do armazenamento
    navigate("/login"); // 🚀 Redireciona para a tela de login
  };

  const footer = (
    <Box sx={{
      position: "absolute",
      bottom: 0,
      width: '100%',
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <Box sx={{ borderBottom: "2px solid rgb(255,255,255, 0.25)", width: "87%" }} />
      <Box
        sx={{

          padding: "10px",
          backgroundColor: 'transparent',
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "5px 0px 5px 0px",
        }}
      >
        
        <Box
          sx={{
            borderRadius: "10px",
            padding: "5px 5px 5px 0px",
            /* margin: "5px 5px 5px 0px", */
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
            color: 'white',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#0d3d8a',
              transition: 'background-color 0.3s'
            }
          }}
          onClick={handleFooterMenuOpen} // Abre o menu ao clicar
        >
          <Box component="img" src={user} alt="perfil do usuário" className={styles.image_user} />

          <span className={styles.info_user}>
            Caveira <br />
            meia_noite@teconto.com
          </span>
          <span
            className={styles.seta}
            style={{
              transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)', // Aplica a rotação
              transition: 'transform 0.3s', // Adiciona uma transição suave
            }}
          >
            <KeyboardArrowUpIcon />
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
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          disableAutoFocusItem // Desabilita o foco automático no MenuItem
        >
          <MenuItem component={Link} to="#">
            <ListItemIcon>
              <PersonOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Perfil</ListItemText>
          </MenuItem>

          {/* Outros MenuItems */}
          <MenuItem component={Link} to="#">
            <ListItemIcon>
              <VerifiedUserIcon />
            </ListItemIcon>
            <ListItemText>Políticas de privacidade</ListItemText>
          </MenuItem>

          <MenuItem component={Link} to="#">
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
    </Box>
  );

  // Conteúdo do Drawer
  const drawerContent = (
    <>
      <List>
        {itemsNav1.map((item, index) => (
          <ListItem key={index} sx={{ paddingTop: "0px", paddingBottom: "5px" }}>
            <NavLink
              to={item.route}
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: 'inherit',
                width: '100%',
                borderRadius: '10px',
                backgroundColor: isActive ? '#0d3d8a' : 'transparent', // Destaca o item ativo
              })}
            >
              <ListItemButton
                sx={{
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  '&:hover': { backgroundColor: '#0d3d8a', transition: 'background-color 0.3s' },
                }}
              >
                <ListItemIcon sx={{ minWidth: '40px', color: 'white', fontSize: 30 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ paddingLeft: '0' }} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider variant="middle" sx={{ borderBottomWidth: 2, borderColor: 'white' }} />
      <List>
        {itemsNav2.map((item, index) => (
          <ListItem key={index} sx={{ paddingTop: "0px", paddingBottom: "5px" }}>
            {item.text === "Sistemas" ? (
              <>
                <ListItemButton
                  onClick={handleClick} // Abre o menu ao clicar
                  sx={{
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    backgroundColor: open ? '#0d3d8a' : "transparent",
                    '&:hover': { backgroundColor: '#0d3d8a', transition: 'background-color 0.3s' },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: '40px', color: 'white', fontSize: 30 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={{ paddingLeft: '0', }}>
                    <>Sistemas <KeyboardArrowRightIcon sx={{
                      transform: isRotatedSistemas ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s',
                    }} /></>
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
                    sx: { padding: 0 }, // Remove o padding do MenuList
                  }}
                >
                  {sistemasMenuItems.map((menuItem, idx) => (
                    <React.Fragment key={idx}>
                      <MenuItem
                        onClick={handleClose}
                        sx={{ padding: 0 }} // Remove o padding do MenuItem
                      >
                        <Link to={menuItem.link} style={{ textDecoration: 'none', color: 'inherit', padding: '8px 16px', display: 'block', width: '100%' }}>
                          {menuItem.text}
                        </Link>
                      </MenuItem>
                      {/* Renderiza o Divider apenas se não for o último item */}
                      {idx !== sistemasMenuItems.length - 1 && (
                        <Divider className={styles.list_sistemas} />
                      )}
                    </React.Fragment>
                  ))}
                </Menu>
              </>
            ) : (
              <ListItemButton
                sx={{
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  '&:hover': { backgroundColor: '#0d3d8a', transition: 'background-color 0.3s' },
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
        background: 'linear-gradient(180deg, #050A24 40%, #13268A 98%)',
      }}
    >
      <CssBaseline />
      {/* Drawer para dispositivos móveis */}
      {isMobile && (
        <AppBar position='fixed' sx={{ background: 'linear-gradient(180deg, #050A24 10%, #13268A 98%)', display: "flex", justifyContent: 'center', flexDirection: "row", height: '80px' }}>
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
            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
              {logo}
            </Link>
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
            background: 'linear-gradient(180deg, #050A24 40%, #13268A 98%)',
            color: 'white',
          },
        }}
        anchor="left"
      >
        {!isMobile && (<Box sx={{ paddingTop: 2 }}>
          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
            {logo}
          </Link>
          <Divider variant="middle" sx={{ borderBottomWidth: 2, borderColor: 'white' }} />
        </Box>)}
        {drawerContent}
      </Drawer>
    </Box>
  );
}