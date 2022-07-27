import React from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function ClubTypes(){
    return(
        <Container>
            <section className='heading'>
                <Typography variant="h4">Club Types</Typography>
            </section>
            <section>
                <ul className='blocks'>
                    <li><div className="card"><span>Sports</span></div></li>
                    <li>Academics</li>
                    <li>Greek</li>
                    <li>Service</li>
                    <li>Politics</li>
                    <li>Fine Arts</li>
                </ul>
            </section>
            
        </Container>
    );
}