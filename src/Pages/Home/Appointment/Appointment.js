import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import doctorImage from '../../../images/doctor.png';
import MuiButton from '../../../StyleComponent/MuiButton';
import { makeStyles } from '@mui/styles';
import bg from '../../../images/appointment-bg.png';

const Appointment = () => {
    const useStyle = makeStyles({
        root:{
            background: `url(${bg}), linear-gradient(#3A4256, #3A4256)`,
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            height: 380,
            display: 'flex',
            alignItems: 'center',
            marginBottom: 75,
            marginTop: 120,
        }
    });
    const { root } = useStyle()
    return (
        <div className={root}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <img src={doctorImage} alt="" width="100%" style={{ marginTop: -84 }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <Typography variant="h6" sx={{ color: '#19D3AE' }}>Appointment</Typography>
                        <Typography variant="h4" sx={{ color: '#fff' }}>Make an Appointment Today</Typography>
                        <Typography variant="body1" sx={{ my: 3, color: '#fff' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</Typography>
                        <MuiButton>Learn More</MuiButton>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Appointment;