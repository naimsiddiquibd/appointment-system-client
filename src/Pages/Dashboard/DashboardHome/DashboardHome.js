import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';
import { infoData } from '../../../data/data';
import { Paper, Typography } from '@mui/material';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ScheduleIcon from '@mui/icons-material/Schedule';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    const [appointments, setAppointments] = React.useState([])
    const [allAppointment, setAllAppointments] = React.useState([])

    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch('https://thawing-shelf-40149.herokuapp.com/AllUsers')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    useEffect(() => {
        const url = `https://thawing-shelf-40149.herokuapp.com/appointments?email=${user.email}&date=${date}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [])

    useEffect(() => {
        const url = `https://thawing-shelf-40149.herokuapp.com/allappointments`
        fetch(url)
            .then(res => res.json())
            .then(data => setAllAppointments(data));
    }, [])


    const [date, setDate] = React.useState(new Date())
    return (
                    <div> <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={4} ld={4}>
                            <Paper varient="outland" sx={{ display: 'flex', justifyContent: 'space-around', color: '#fff', background: '#F1536E', p:2, alignItems: 'center' }}>
                                <ScheduleIcon sx={{ fontSize: 60 }} />
                                <div>
                                    <Typography variant="h4">{appointments.length}</Typography>
                                    <Typography variant="subtitle1">Your Appointments's Today</Typography>
                                </div>
                            </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} ld={4}>
                            <Paper varient="outland" sx={{ display: 'flex', justifyContent: 'space-around', color: '#fff', background: '#3DA5F4', p:2, alignItems: 'center' }}>
                                <LibraryBooksIcon sx={{ fontSize: 60 }} />
                                <div>
                                    <Typography variant="h4">{allAppointment.length}</Typography>
                                    <Typography variant="subtitle1">Total Appointment's Number</Typography>
                                </div>
                            </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} ld={4}>
                            <Paper varient="outland" sx={{ display: 'flex', justifyContent: 'space-around', color: '#fff', background: '#00C689', p:2, alignItems: 'center' }}>
                                <AdminPanelSettingsIcon sx={{ fontSize: 60 }} />
                                <div>
                                    {
                            user?.role ?
                            <Typography variant="h4">Admin</Typography>
                            :
                            <Typography variant="h4">Patient</Typography>
                             }

                                    <Typography variant="subtitle1">Your Browsing Identity Here</Typography>
                                </div>
                            </Paper>
                    </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid sx={{ boxShadow: 2, mt: 6}} item xs={12} sm={5}>
                            <Calendar
                                date={date}
                                setDate={setDate}
                            ></Calendar>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Appointments date={date}></Appointments>
                        </Grid>
                    </Grid>
                    </div>
    );
};

export default DashboardHome;