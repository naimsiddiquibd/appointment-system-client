import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import MuiButton from '../../../StyleComponent/MuiButton';
import chairImg from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Link } from 'react-router-dom';

const style = {
    minHeight: 500,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: `url(${bg})`
}

const Banner = () => {
    return (
        <div style={style}>
            <Container>
                <Grid container spacing={2} sx={{ alighItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h4" sx={{ fontWeight: 600 }}>
                            Our Appointment <br /> System Project
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2, my: 3 }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        </Typography>
                        <MuiButton><Link style={{ textDecoration: 'none', color: 'white' }} to="/appointments">Get Appointment</Link></MuiButton>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                         <img src={chairImg} alt="" width="100%"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;