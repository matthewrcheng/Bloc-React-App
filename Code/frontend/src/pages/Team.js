import React from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import '../pages css/Team.css';
import richard_img from '../images/richard_she.jpeg';
import jonathan_img from '../images/jonathan_li.jpeg';
import robert_img from '../images/robert_zhang.png';
import matt_img from '../images/matt_cheng.jpeg';
import willie_img from '../images/willie_sadler.jpeg';
import jason_img from '../images/jason_liu.png';
import mihindu_img from '../images/mihindu.jpeg';
import david_img from '../images/david_huang.jpeg';



const Team = () => {

    const people = [
        {
            name: "Richard She",
            role: "Product Owner",
            img: richard_img,
        },
        {
            name: "Jonathan Li",
            role: "Scrum Master",
            img: jonathan_img,
        },
        {
            name: "Robert Zhang",
            role: "DevOps Engineer",
            img: robert_img,
        },
        {
            name: "Matthew Cheng",
            role: "Software Architect",
            img: matt_img,
        },
        {
            name: "Willie Sadler",
            role: "CEO",
            img: willie_img,
            
        },
        {
            name: "Jason Liu",
            role: "Business Analyst",
            img: jason_img,
        },
        {
            name: "Mihindu",
            role: "Project Manager",
            img: mihindu_img,
        },
        {
            name: "David Huang",
            role: "UI/UX Designer",
            img: david_img,
        }
    ];

    return(
        <Container style={{backgroundColor:'#f0f0f0'}}>
            <div className='heading'>
                <Typography variant="h4">The Team</Typography>
            </div>
            <div className="container">
                {people.map((person, index) => {
                    return (
                    <div className="box">
                        <div className="imgBox">
                            <img src={person.img} className="img-person"/>
                        </div>
                        <div className="content">
                            <Typography variant="h5" className='content-h5'>{person.name}
                                <br></br>
                                <Typography className='content-sub' variant="subtitle1" gutterBottom component="div">
                                {person.role}
                                </Typography>
                            </Typography>
                        </div>
                    </div>
                    )
                })} 
            </div>
        </Container>
    );
}

export default Team;