import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
const UserList = () => {

    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch('https://thawing-shelf-40149.herokuapp.com/AllUsers')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
    <Typography variant="h6" gutterBottom component="div">
        User List
    </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="right">User ID</TableCell>
            <TableCell align="right">User Email</TableCell>
            <TableCell align="right">User Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
                        users.map(user => <TableRow
                            key={user._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {user.displayName}
                            </TableCell>
                            <TableCell align="right">{user._id}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            {
                            user?.role ?
                            <TableCell align="right">{user.role}</TableCell>
                            :
                            <TableCell align="right">User</TableCell>
                             }
                          </TableRow>)
                    }
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default UserList;