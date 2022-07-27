import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import axios from 'axios';
import '../pages css/MediaIcons.scss';
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import EventCalendar from './EventCalendar'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Club = () => {
    const [results, setResults] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const loggedin = localStorage.getItem('loggedin');

    const location = useLocation();
    const data = location.state;
    const user_id = localStorage.getItem('user_id');

    //console.log("Club data", data);
    //console.log("user id ", localStorage.getItem('user_id'));

    useEffect(() => {
        const checkClubinUserClubs = async () => { 
            //making GET request to thie link which triggers our server's GET function
            await axios.get(`http://localhost:3001/api/data/users/user/${user_id}/clubs/${data.club_id}`)
                .then(res /*on resolved*/ => {
                setResults(res.data.data);
            }
        )}
        checkClubinUserClubs();
    },[results]);

    const handleSubmit = async(e) => {
        try{
            setResults(1);
            await axios.post(`http://localhost:3001/api/data/users/${user_id}/addClub/${data.club_id}` ,{
                club_id: data.club_id,
            });
        }catch(err){
            console.log(err);
        }
    }

    const handleDelete = async(e) => {
        try{
            setResults(0);
            //console.log("attempting  to delete...");
            await axios.delete(`http://localhost:3001/api/data/users/user/${user_id}/clubs/${data.club_id}` ,{
                club_id: data.club_id,
            });
        }catch(err){
            console.log(err);
        }
    }

    var trueTime = "";
    const convertTime = (time) => {
        if(time==null) return null;
        var timeInt = time.substring(0,2);
        if(timeInt > 12){
            timeInt -= 12;
            trueTime = timeInt.toString() + time.substring(2,5)+"pm";
        }else{
            trueTime = time.substring(0,5)+"am";
        }
    }
    convertTime(data.mtime);

 return(
    <Container style={{minHeight:"90vh"}}>
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </head>
        <section className='photos'>
            <img src={one} className='primaryImage'/>
            <img src={two} className='secondaryImages'/>
            <img src={three} className='secondaryImages'/>
            <img src={four} className='secondaryImages'/>
            <a onClick={handleOpen} className='secondaryImages addPhotos'>
                <Typography variant="subtitle1">Add Photos</Typography>
            </a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                </Box>
            </Modal>
        </section>
        <section className='heading'>
            <div style={{display:'flex', alignItems:'center'}}>
                <Typography variant="h4" style={{marginRight:'15px'}}>{data.club_name}</Typography>
                {data.type}
            </div>
            {loggedin=='false' ? null: 
            results==1 ? 
            <Button onClick={handleDelete} variant="contained">Unsubscribe</Button>
                : <Button onClick={handleSubmit} variant="contained">Subscribe</Button>
            }
        </section>     
        <section style={{display:'flex'}}>
            <Typography variant="overline">
                <div className="size">
                    <div><b>Meetings: </b>
                        {data.mday && data.mtime ?
                        <>
                        {data.mday} @ {trueTime}
                        </>
                        : "No Info ATM!"}
                    </div>
                </div>
            </Typography>
            <Typography variant="overline" style={{marginLeft:'15px'}}>
                <div className="size">
                    <div><b>Location: </b>
                        {data.mlocation ? data.mlocation 
                        : "No Info ATM!"}
                    </div>
                    
                </div>
            </Typography>
        </section>
        <section className='clubContent'>
            <Typography variant="caption">{data.description}</Typography>   
            <div className="social-container">
                <ul className="social-icons">
                    <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href={"mailto:"+data.email}><i className="fa-solid fa-inbox"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-facebook-square"></i></a></li>
                </ul>
            </div>
        </section>
        <section className='upcomingContent' >
            <Typography variant="h6" style={{marginRight:'15px', marginTop:'75px'}}>Upcoming Events</Typography>
            <EventCalendar></EventCalendar>
        </section>
    </Container>    
 );
}

export default Club;