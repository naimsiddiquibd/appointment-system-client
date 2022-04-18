import * as React from 'react';
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const AllAppointments = () => {

    const [appointments, setAppointments] = React.useState([]);

    React.useEffect(() => {
        fetch('https://thawing-shelf-40149.herokuapp.com/allappointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div>
            <Typography variant="h6" gutterBottom component="div">
                All Appointments
            </Typography>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Remarks</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Prescribtion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
                        appointments.map(appointment => <TableRow
                            key={appointment._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {appointment.patientName}
                            </TableCell>
                            <TableCell align="right">{appointment.email}</TableCell>
                            <TableCell align="right">{appointment.time}</TableCell>
                            <TableCell align="right">{appointment.serviceName}</TableCell>
                            <TableCell align="right">{appointment.date}</TableCell>
                            <TableCell align="right">
                            {appointment.payment ?
                                <Button style={{ backgroundColor: '#04AA6D',  color: 'white' }} variant="contained" disabled>Repaid</Button> :
                                <Button variant="contained" disabled>Unpaid</Button>
                                }
                            </TableCell>
                            <TableCell align="right">
                            {appointment.payment ?
                                <Button variant="contained">Prescribe</Button> :
                                <Button variant="contained" disabled>Outlawed</Button>
                                }
                            </TableCell>
                          </TableRow>)
                    }
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default AllAppointments;