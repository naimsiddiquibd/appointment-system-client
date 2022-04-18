import React, { useState, useEffect } from 'react';
import useAuth from './../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Appointments = ({ date }) => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const url = `https://thawing-shelf-40149.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [date, user.email])

    return (
        <div>
            <Typography variant="h5" sx={{  mt: 4, mb: 1 }}>
            Pick a date and check the Appointments
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.payment ?
                                <Button variant="contained" disabled>Paid</Button> :
                                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/dashboard/payment/${row._id}`}><Button variant="contained">Pay</Button></Link>
                                }</TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;