import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../pages css/MyClubs.css';
import test from '../images/test.png';
import Recommender from './Recommender';

const MyClubs = () =>{
    const user_id = localStorage.getItem('user_id');
    const [results, setResults] = useState([]);
    const base = "/clublist";


    /*
        basically means fetchclubs = async function() {}
    */
    const fetchClubs = async () => {
        //making GET request to thie link which triggers our server's GET function
        await axios.get(`http://localhost:3001/api/data/users/user/${user_id}/clubs`)
            .then(res /*on resolved*/ => {
            setResults(res.data.data);
            console.log(res.data.data);
        }
    )}

    useEffect(() => {
        fetchClubs();
    },[]);



    const handleDelete = async (club_id) =>{
        //console.log("clicked w/ id ", club_id);
        try{
            //console.log("attempting  to delete...");
            await axios.delete(`http://localhost:3001/api/data/users/user/${user_id}/clubs/${club_id}` ,{
                club_id: club_id,
            });
            fetchClubs();
        }catch(err){
            console.log(err);
        }
    }

    return (
        <Container style={{minHeight:'90vh'}}>
            <section className='heading'>
                <Typography variant="h4">My Clubs</Typography>
            </section>
            <section className='myClubsGrid'>
            {results.map(result => {
                return (
                    <div className="card">
                            <div className="imgBx">
                                <img src={test}/>
                            </div>
                            <div className="contentBx">
                                <Link to={`${base}/${result.club_id}`} state = {result}>
                                    <h2>{result.club_name}</h2>
                                </Link>
                                <div className="size" style={{marginTop:"10px"}}>
                                    <h3>Meeting :</h3>
                                    {result.mday && result.mtime ?
                                    <>
                                    <div>{result.mday}</div>
                                    <div>{result.mtime}</div>
                                    </>
                                    :
                                    <div>No Info ATM!</div>}
                                </div>
                                <div className="color" style={{marginTop:"10px"}}>
                                    <h3 className='myClubsh3'>Location :</h3>
                                    {result.mday && result.mtime ?
                                    <>
                                    <div>{result.mlocation}</div>
                                    </>
                                    :
                                    <div>No Info ATM!</div>}
                                </div>
                                <a href="#" onClick={() => handleDelete(result.club_id)} className='button' style={{marginTop:"10px"}}>Unsubscribe</a>
                            </div>
                        </div>
                    )})}
            </section>
            <Recommender/>  
        </Container>
    );
}
export default MyClubs;
