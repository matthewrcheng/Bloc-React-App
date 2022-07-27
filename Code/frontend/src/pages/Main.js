import React, {useState} from 'react';
import {
    BrowserRouter as
    Router,
    Routes,
    Route,
  } from "react-router-dom";

//importing potential pages
import HomePage from './HomePage';
import Calendar from './Calendar';
import ClubList from './ClubList';
import MyClubs from './MyClubs';
import Club from './Club';
import NavBar from './Navbar';
import Login from './Login';
import { GlobalState } from '../context/GlobalState';
import EditClub from './EditClub';
import SearchBar from './SearchBar';
import ClubTypes from './ClubTypes';
import Recommender from './Recommender';

const Main = () =>{
    const [token, setToken] = useState(localStorage.getItem('loggedin'));
    //console.log("are we loggedin? ", token);
    return (
        <GlobalState.Provider value = {[token, setToken]}>
            <Router>
                <NavBar/>
                <Routes>
                    {token == false ?
                            null
                    : <>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/calendar" element={<Calendar/>}/>
                    </>
                    }
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/clublist" element={<ClubList/>}/>
                    <Route exact path="/clublist/:id" element={<Club/>}/>
                    <Route exact path="/myclubs" element={<MyClubs/>}/>
                    <Route exact path="/edit" element={<EditClub/>}/>
                    <Route exact path="/search" element={<SearchBar/>}/>
                    <Route exact path="/clubtypes" element={<ClubTypes/>}/>
                    <Route exact path="/recommender" element={<Recommender/>}/>
                </Routes>
            </Router>
        </GlobalState.Provider>

    );
}

export default Main;
