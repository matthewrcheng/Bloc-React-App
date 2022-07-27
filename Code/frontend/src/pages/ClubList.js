import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../pages css/ClubList.css';
import SearchBar from './SearchBar';
import pfp from '../images/clubPfp.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function ClubList(){
    const [results, setResults] = useState([]);
    
    //useEffects are to perform side-effects or things that don't directly target the output
    //in this case we are using to fetch data 
    useEffect(() => {
        /*
        basically means fetchclubs = async function() {}
        */
        const fetchClubs = async () => { 
            //making GET request to thie link which triggers our server's GET function
            await axios.get(`http://localhost:3001/api/data`)
                .then(res /*on resolved*/ => {
                setResults(res.data.data);
                //console.log("all clubs", res.data.data);
            }
        )}
        fetchClubs();
    }, []);

    const base = "/clublist";

    console.log(typeof(results));

    //Need to figure out where to include the search bar
    return (
        <Container>
            <section className='heading'>
                <Typography variant="h4">Organizations</Typography>
            </section>
            <section className='clubBlocks'>
            {results.map(result => {
                var mday="Meeting Day: "
                var mtime="Meeting Time: "
                var mlocation="Meeting Location: "
                var minfo=null
                if (result.mday==null){
                    mday=null
                }
                else{
                    mday=mday+result.mday
                }
                if (result.mtime==null){
                    mtime=null
                }
                else{
                    mtime=mtime+result.mtime
                }
                if (result.mlocation==null){
                    mlocation=null
                }
                else{
                    mlocation=mlocation+result.mlocation
                }
                if (result.mtime==null&&result.mday==null&&result.mlocation==null){
                    minfo="No Meeting Information"
                }
                return (
                    <Box sx={{ width: '100%', m: 2 }}>
                         <Grid container rowSpacing={2} columnSpacing={3} className='clubGrid'>
                            <Grid item xs={4}>
                                <Item>
                                    <Link to={`${base}/${result.club_id}`} state = {result}>
                                        <div className='clubListBox'>
                                            <Typography variant="h6">{result.club_name}</Typography>
                                        </div>
                                        <div className='descriptionBox'>
                                            <Typography variant="h10">{mday}{"          "} </Typography>   
                                            <Typography variant="h10">{mtime}{"          "} </Typography>
                                            <Typography variant="h10">{mlocation}</Typography>
                                            <Typography variant="h10">{minfo}</Typography>
                                        </div> 
                                    </Link>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    )})}
                    
            </section>
        </Container>
    );
}

export default ClubList;