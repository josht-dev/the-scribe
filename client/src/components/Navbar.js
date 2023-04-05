import React, {useState} from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
} from "@mui/material";
import Auth from "../utils/auth";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "../assets/the-scribe-logo 1.svg";
import Login from "./Login";
import Register from "./Register";

export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSetLoggedIn = () => {
      setLoggedIn(!loggedIn);
    };

  const notLog = [
    {
      name: "LOGIN",
      id: 6,
      link: "#",
    },
    {
      name: "REGISTER",
      id: 7,
      link: "#",
    },
  ];
  const log = [
    {
      name: "CAMPAIGNS",
      id: 1,
      link: "/campaigns",
    },
    {
      name: "WORKSHOP",
      id: 2,
      link: "/workshop",
    },
    {
      name: "HEADSPACE",
      id: 3,
      link: "/headspace",
    },
    {
      name: "ACCOUNT",
      id: 4,
      link: "/account",
    },
    {
      name: "LOGOUT",
      id: 5,
      link: "#",
    },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [btnId, setBtnId] = useState("0")

  const handleSetBtnId = (id) => setBtnId(id);

  const [openModal, setOpenModal] = useState(false);

  const handleLinkClick = (e) => {
    handleSetBtnId(e.target.id)
    if (e.target.id === "5"){
      handleSetLoggedIn();
      Auth.logout()
    }
      if (e.target.id === "6") {
        e.preventDefault();
        setOpenModal(true);
      }
    if (e.target.id === "7") {
      e.preventDefault();
      setOpenModal(true);
    }
  };

  // const convertNav = () =>{
  //   return (
  //     <IconButton
  //       size="large"
  //       edge="start"
  //       color="inherit"
  //       aria-label="open drawer"
  //       sx={{ mr: 2 }}
  //     >
  //       <List>
  //         {notLog.map(() => (
  //           <ListItem button key={notLog.id}>
  //             <ListItemText primary={notLog.name} />
  //           </ListItem>
  //         ))}
  //       </List>
  //       <MenuIcon />
  //     </IconButton>
  //   );
  // }

  const renderlog = () => {
    if (loggedIn) {
      return (
        <>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {log.map((log) => (
                <MenuItem key={log.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{log.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            {log.map((log) => (
              <Link to={log.link} key={log.id} onClick={handleLinkClick}>
                <Button
                  onClick={handleCloseNavMenu}
                  id={log.id}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    backgroundColor: "#1CB9B3",
                    marginRight: "1rem",
                    boxShadow:
                      "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  {log.name}
                </Button>
              </Link>
            ))}
          </Box>
        </>
      );
    } else {
        return (
          <>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
                paddingRight: "3.5rem",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {notLog.map((notLog) => (
                  <MenuItem key={notLog.id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{notLog.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              {notLog.map((notLog) => (
                <Link
                  to={notLog.link}
                  key={notLog.id}
                  onClick={handleLinkClick}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    id={notLog.id}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      backgroundColor: "#1CB9B3",
                      marginRight: "1rem",
                      boxShadow:
                        "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                    }}
                  >
                    {notLog.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </>
        );
    }
  };

  const renderModal = () =>{

    if (openModal){
     
      switch (btnId){
        case "6":
          return (
            <Login
              openModal={openModal}
              setOpenModal={setOpenModal}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          );
        case "7":
          return <Register openModal={openModal} setOpenModal={setOpenModal} />;
          default:
            break;
      }
    } 
    else {
      return
    }
  }

  

  return (
    <>
    <AppBar position="static" sx={{ backgroundColor: "white" }} component="nav">
      <Container disableGutters maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={Logo}
            alt="the scribe logo"
            style={{ marginRight: "1rem" }}
          ></img>
          <Typography
            variant="h6"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat",
              fontWeight: 900,
              fontSize: "3rem",
              lineHeight: "4.5rem",
              color: "black",
            }}
          >
            The Scribe
          </Typography>
          {renderlog()}
        </Toolbar>
      </Container>
    </AppBar>
    {renderModal()}
    </>
  );
}
