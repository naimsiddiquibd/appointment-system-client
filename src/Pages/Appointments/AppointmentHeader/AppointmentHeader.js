import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import appointmentImg from '../../../images/appointment.png';
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <div>
            <Container>
                <Grid container spacing={2} sx={{ marginTop: '50px' }}>

                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ boxShadow: 2, mb: 5 }}>
                        <Typography variant="h4" sx={{ color: '#3A4256', marginBottom: '45px' }}>Choose your date</Typography>
                        <Calendar sx={{ boxShadow: 2, mt: 6 }} date={date} setDate={setDate}></Calendar>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src={appointmentImg} alt="" width="100%"/>
                    </Grid>
                
                </Grid>

                </Container>
        </div>
    );
};


export default AppointmentHeader;