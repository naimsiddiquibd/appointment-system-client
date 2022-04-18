import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import fbg from '../../../images/footer-bg.png';
import MuiButton from '../../../StyleComponent/MuiButton';

const Footer = () => {
    const useStyle = makeStyles({
        root:{
            background: `url(${fbg})`,
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            height: 60,
            marginBottom: 200,
            marginTop: 120,
        }
    });
    const { root } = useStyle()
    return (
        <div className={root}>
            <div>
                <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Typography variant="body1" sx={{ color: '#19D3AE', marginTop: '12px' }}>Directors</Typography>
                        <Typography variant="body2" sx={{ color: '#3A4256', marginTop: '12px' }}>Abul Hasanat</Typography>
                        <Typography variant="body2" sx={{ color: '#3A4256', marginTop: '12px' }}>Kamrul Hasan</Typography>
                        <Typography variant="body2" sx={{ color: '#3A4256', marginTop: '12px' }}>Mahidul Alam</Typography>
                        <Typography variant="body2" sx={{ color: '#3A4256', marginTop: '12px' }}>Rafiqul Islam</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Typography variant="body1" sx={{ color: '#19D3AE', marginTop: '12px' }}>Services</Typography>
                        <Typography variant="body2" sx={{ color: '#3A4256', marginTop: '12px' }}>Appointment</Typography>
                        <Typography variant="body2" sx={{ color: '#3A4256', marginTop: '12px' }}>Surgury</Typography>
                        <Typography variant="body2" sx={{ color: '#3A4256', marginTop: '12px' }}>Health Test</Typography>
                        <Typography variant="body2" sx={{ color: '#3A4256', marginTop: '12px' }}>Oral Care</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Typography variant="body1" sx={{ color: '#19D3AE', marginTop: '12px' }}>Oral Health</Typography>
                        <Typography variant="body2" sx={{ color: '#3A4256', marginTop: '12px' }}>Teeth Protection</Typography>
                        <Typography variant="body2" sx={{ color: '#3A4256', marginTop: '12px' }}>Oras Save</Typography>
                        <Typography variant="body2" sx={{ color: '#3A4256', marginTop: '12px' }}>Mouth Panic</Typography>
                        <Typography variant="body2" sx={{ color: '#3A4256', marginTop: '12px' }}>Tougn Problem</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Typography variant="body1" sx={{ color: '#19D3AE', marginTop: '12px' }}>Address</Typography>
                        <Typography variant="body2" sx={{ color: '#3A4256', marginTop: '12px' }}>Daffodil Smart City, Khagan, Ashulia, Savar, Dhaka</Typography>
                        <MuiButton sx={{ marginTop: '12px' }}>Contact Us</MuiButton>
                    </Grid>
                </Grid>
                <Grid sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Typography variant="body2" sx={{ color: '#000' }}>Appointment System - Copyright: Naim Siddiqui</Typography>
                </Grid>
                </Container>
            </div>
        </div>
    );
};

export default Footer;