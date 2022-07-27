import React, {useContext, useEffect} from 'react';
import Button from '@mui/material/Button';
import { GlobalState } from '../context/GlobalState';
import { useNavigate } from "react-router-dom";
import '../pages css/Navbar.css';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';

function NavBar(){
    useEffect (() => {
        let menuIcon = document.querySelector('.menuIcon');
        let nav = document.querySelector('.overlay-menu');

        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else {
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
        }
    });

        // Toggle Menu Icon ========================================
        let toggleIcon = document.querySelector('.menuIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'menuIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'menuIcon';
            }
        });
    },[])

    const [token, setToken] = useContext(GlobalState);
    //console.log("navbar token ",token);
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        navigate("/");
        localStorage.setItem('loggedin', false);
        setToken(false);
    }
    //console.log("type of token is ", typeof(token));


    const handleLogin = async (e) => {
        //e.preventDefault();
        navigate("/login");
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    if((token == 'true')||(token == true)){
        return(
            <div className="nav">
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                </head>
                <section id="navbar">
                    <div className="nav-wrapper">
                        <div className="logo">
                            <a href="/"><i className ="fa-solid fa-hand-peace"></i> Bloc </a>
                        </div>

                        <ul id="menu">
                            <li><a href="/clublist">Clubs</a></li>
                            <li><a href="/calendar">Calendar</a></li>
                            <li>
                                <button onClick={handleClick} style={{backgroundColor: "transparent"}}>
                                    <Avatar sx={{ width: 40, height: 40 }}  className="profileImg">T</Avatar>
                                </button>
                            </li>
                        </ul>
                        <Menu anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                              overflow: 'visible',
                              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                              mt: 1.5,
                              '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                              },
                            },
                          }}
                          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                            <a href="/myclubs">
                                <MenuItem >
                                    <Avatar /> 
                                    My Profile
                                </MenuItem>
                            </a>
                            <Divider />
                            <Button variant='text' type='submit' onClick={handleLogout}>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon> 
                                    Logout
                                </MenuItem>
                            </Button>
                            
                        </Menu>
                    </div>
                </section>

                <section className="menuIcon">
                    <span className="icon icon-bars"></span>
                    <span className="icon icon-bars overlay"></span>
                </section>

                {/*
                <section className="overlay-menu">
                    <ul id="menu">
                        <li><a href="/clublist">Clubs</a></li>
                        <li><a href="/calendar">Calendar</a></li>
                        <li><a href="/myclubs">My Clubs</a></li>
                        <li><a href="/recommender">Recommended Clubs</a></li>
                        <li><Button variant='text' type='submit' onClick={handleLogout}>Logout</Button></li>
                    </ul>
                </section>
                */}
            </div>
        );
    }else{
        return(
            <div className="nav">
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />                </head>
                <section id="navbar">
                    <div className="nav-wrapper">
                        <div className="logo">
                            <a href="/"><i className ="fa-solid fa-hand-peace"></i> Bloc </a>
                        </div>
                        <ul id="menu">
                            <li><a href="/clublist">Clubs</a></li>
                            <li><Button variant='text' onClick={handleLogin}>Login</Button></li>
                        </ul>
                    </div>
                </section>

                <section className="menuIcon">
                    <span className="icon icon-bars"></span>
                    <span className="icon icon-bars overlay"></span>
                </section>

                {/*
                <section className="overlay-menu">
                    <ul id="menu">
                        <li><a href="/clublist">Clubs</a></li>
                        <li><Button variant='text' onClick={handleLogin}>Login</Button></li>
                    </ul>
                </section>
                 */}
                
            </div>
        );
    }

}

export default NavBar;
