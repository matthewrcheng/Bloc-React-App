import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Recommender(){
    const [results, setResults] = useState({
      First: '',
      Firstr: [{
        club_id:'',
        club_name:'',
        create_at:'',
        description:'',
        email:'',
        mday:'',
        mlocation:'',
        mtime:'',
        type:''},{
        club_id:'',
        club_name:'',
        create_at:'',
        description:'',
        email:'',
        mday:'',
        mlocation:'',
        mtime:'',
        type:''},{
        club_id:'',
        club_name:'',
        create_at:'',
        description:'',
        email:'',
        mday:'',
        mlocation:'',
        mtime:'',
        type:''}],
      Second: '',
      Secondr: [{
        club_id:'',
        club_name:'',
        create_at:'',
        description:'',
        email:'',
        mday:'',
        mlocation:'',
        mtime:'',
        type:''},{
        club_id:'',
        club_name:'',
        create_at:'',
        description:'',
        email:'',
        mday:'',
        mlocation:'',
        mtime:'',
        type:''},{
        club_id:'',
        club_name:'',
        create_at:'',
        description:'',
        email:'',
        mday:'',
        mlocation:'',
        mtime:'',
        type:''}],
      Third: '',
      Thirdr: [{
        club_id:'',
        club_name:'',
        create_at:'',
        description:'',
        email:'',
        mday:'',
        mlocation:'',
        mtime:'',
        type:''},{
        club_id:'',
        club_name:'',
        create_at:'',
        description:'',
        email:'',
        mday:'',
        mlocation:'',
        mtime:'',
        type:''},{
        club_id:'',
        club_name:'',
        create_at:'',
        description:'',
        email:'',
        mday:'',
        mlocation:'',
        mtime:'',
        type:''}]
    });
    const base = "/clublist";

    useEffect(() => {
        /*
        basically means fetchclubs = async function() {}
        */
        const fetchRecommend = async () => {
            //making GET request to thie link which triggers our server's GET function
            await axios.get(`http://127.0.0.1:5000`)
                .then(res /*on resolved*/ => {
                setResults(res.data);
                //console.log(results);
                console.log("first",results.Firstr);
                //console.log(results.Firstr.map(result => {return (result.club_id)}));
                //console.log(res.data.Second);
                //console.log(res.data.Third);
                //console.log(res.data);
            }
        )}
        fetchRecommend();
    },[]);

    // cut starting with <Typography variant="h6">Since you're in {results.First[0]}:</Typography>
    // and ending with the last </section>
    // run the app
    // paste the cut lines back
    // save (upon save, it should display the correct information)
    return (
        <div>
            <section className='heading2'>
                <Typography variant="h4">Recommended Clubs</Typography>
                <Typography variant="caption">
                    Created by our special algorithm and with 
                    <i className="fa-solid fa-heart" style={{color:"red"}}></i>
                    ...
                </Typography>
                
            </section>
            <section className='recoClubs'>
            {results.Firstr.map(result => {
              return (
                  <div className='recoClub'>
                        <Link to={`${base}/${result.club_id}`} state = {result}>
                            <div>
                                <Typography variant="h6">{result.club_name}</Typography>
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                        </Link>
                  </div>
                  )})}
            {results.Secondr.map(result => {
              return (
                  <div className='recoClub'>
                        <Link to={`${base}/${result.club_id}`} state = {result}>
                            <div>
                                <Typography variant="h6">{result.club_name}</Typography>
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                        </Link>
                  </div>
                  )})}
            {results.Thirdr.map(result => {
              return (
                  <div className='recoClub'>
                        <Link to={`${base}/${result.club_id}`} state = {result}>
                            <div>
                                <Typography variant="h6">{result.club_name}</Typography>
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                        </Link>
                  </div>
                  )})}
            </section>
        </div>
    );
}

export default Recommender;
