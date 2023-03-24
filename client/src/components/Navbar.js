import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const notLog = ['LOGIN', 'REGISTER'];
const log = ['CAMPAIGNS', 'WORKSHOP', 'HEADSPACE', 'ACCOUNT', 'LOGOUT'];

export default function Navbar() {
    const notLog = [
        {
            name: "LOGIN", 
            id: 1,
            link: "login" 
        }, 
        {
            name: "REGISTER", 
            id: 2, 
            link: "register"
        },
        ]
    const log = [
        {
            name: "CAMPAIGNS", 
            id: 1, 
            link: "campaigns"
        }, 
        {
            name: "WORKSHOP", 
            id: 2, 
            link: "workshop"
        }, 
        {
            name: "HEADSPACE", 
            id: 3,
            link: "headspace"
        }, 
        {
            name: "ACCOUNT", 
            id: 4, 
            link: "account"
        }, 
        {
            name: "LOGOUT", 
            id: 5,
            link: "logout"
        },
    ]

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

    return (
        <header>

        </header>
    )

}