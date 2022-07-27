import React from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../pages css/HomePage.css';
import '../pages css/Ipad.scss';
import Team from "./Team";
import { Link } from 'react-scroll';
import SearchBar from "./SearchBar";

const HomePage = () => {
    return(
        <div className="section-container">
            <section>
                <Container>
                    <section style={{display:'flex'}}>
                        <section style={{maxWidth:'40%', marginTop:'20vh',height:'auto'}}>
                            <div className='heading'>
                                <Typography variant="h3">Welcome to Bloc</Typography>
                            </div>
                            <Typography variant="subtitle1">
                                A simple marketplace subscription service creating to
                                help students engage with campus organizations more easily...
                            </Typography>
                            <div style={{marginTop:'25px'}}>
                                <SearchBar/>
                            </div>
                        </section>
                        <figure className='ipad' style={{display:'inline-block', marginTop:'25px', marginLeft:'250px'}}>
                            Bloc - Coming to Mobile Soon...
                        </figure>
                    </section> 
                    <Link className="disappear" activeClass="active" to="section1" spy={true} smooth={true} duration={750}>
                        <i className="fa-solid fa-angle-down fa-2xl" style={{display:"flex",justifyContent:'center', marginTop:'-20vh'}}></i>
                    </Link>        
                </Container>
            </section>
            <section style={{height:"100vh"}} id="section1" className="team">
                <Team/>
            </section>
        </div>
    );
}

export default HomePage;