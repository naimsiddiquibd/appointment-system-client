import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        title: 'Cardiologist',
        time: '08.00 AM - 09.00 AM',
        price: 30,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        title: 'Cardiologist',
        time: '09.00 AM - 10.00 AM',
        price: 20,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        title: 'Cardiologist',
        time: '10.00 AM - 11.00 AM',
        price: 35,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        title: 'Cardiologist',
        time: '11.00 AM - 12.00 PM',
        price: 25,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        title: 'Cardiologist',
        time: '06.00 PM - 07.00 PM',
        price: 45,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        title: 'Cardiologist',
        time: '07.00 PM - 08.00 PM',
        price: 50,
        space: 10,
    },
]




const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://thawing-shelf-40149.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3, textAlign: 'center' }}>Available Appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    services.map(booking => <Booking
                        key={booking._id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;