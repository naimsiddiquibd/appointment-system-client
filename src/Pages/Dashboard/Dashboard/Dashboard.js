import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BallotIcon from '@mui/icons-material/Ballot';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LogoutIcon from '@mui/icons-material/Logout';
import { red } from '@mui/material/colors';
import './Dashboard.css';


import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Grid, ListItemButton, Paper } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';
import RemoveDoctor from '../RemoveDoctor/RemoveDoctor';
import AllAppointments from '../AllAppointments/AllAppointments';
import UserList from '../UserList/UserList';
import AddServices from '../AddServices/AddServices';

const drawerWidth = 200;

function Dashboard(props) {
  const { user, logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const {admin} = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            
            

            <nav aria-label="main mailbox folders" className='nav-bg'>
        <List>
          <ListItem sx={{ mt: 4 }} className='nav-item' disablePadding component={Link} to="/appointment">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon style={{ color: red[50] }} />
              </ListItemIcon>
              <ListItemText primary="Home Page" />
            </ListItemButton>
          </ListItem>
          <ListItem className='nav-item' disablePadding component={Link} to={`${url}`}>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon style={{ color: red[50] }} />
              </ListItemIcon>
              <ListItemText primary="Appointments" />
            </ListItemButton>
          </ListItem>
          

          {admin && <Box>
            <ListItem className='nav-item' disablePadding component={Link} to={`${url}/makeAdmin`}>
            <ListItemButton>
              <ListItemIcon>
                <AddReactionIcon style={{ color: red[50] }} />
              </ListItemIcon>
              <ListItemText primary="Make Admin" />
            </ListItemButton>
          </ListItem>
            <ListItem className='nav-item' disablePadding component={Link} to={`${url}/addServices`}>
            <ListItemButton>
              <ListItemIcon>
                <AddReactionIcon style={{ color: red[50] }} />
              </ListItemIcon>
              <ListItemText primary="Add Services" />
            </ListItemButton>
          </ListItem>
          <ListItem className='nav-item' disablePadding component={Link} to={`${url}/addDoctor`}>
            <ListItemButton>
              <ListItemIcon>
                <AddCircleIcon style={{ color: red[50] }} />
              </ListItemIcon>
              <ListItemText primary="Add Doctor" />
            </ListItemButton>
          </ListItem>
          <ListItem className='nav-item' disablePadding component={Link} to={`${url}/removeDoctor`}>
            <ListItemButton>
              <ListItemIcon>
                <DeleteForeverIcon style={{ color: red[50] }} />
              </ListItemIcon>
              <ListItemText primary="Remove Doctor" />
            </ListItemButton>
          </ListItem>
          <ListItem className='nav-item' disablePadding component={Link} to={`${url}/AllAppointments`}>
            <ListItemButton>
              <ListItemIcon>
                <BallotIcon style={{ color: red[50] }} />
              </ListItemIcon>
              <ListItemText primary="All Appointments" />
            </ListItemButton>
          </ListItem>
          <ListItem className='nav-item' disablePadding component={Link} to={`${url}/UserList`}>
            <ListItemButton>
              <ListItemIcon>
                <ContactPageIcon style={{ color: red[50] }} />
              </ListItemIcon>
              <ListItemText primary="User List" />
            </ListItemButton>
          </ListItem>
          </Box>}
          <ListItem className='logout' disablePadding onClick={logout}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon style={{ color: red[50] }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/payment/:appointmentId`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute>
                    <AdminRoute path={`${path}/removeDoctor`}>
                        <RemoveDoctor></RemoveDoctor>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addServices`}>
                        <AddServices></AddServices>
                    </AdminRoute>
                    <AdminRoute path={`${path}/AllAppointments`}>
                        <AllAppointments></AllAppointments>
                    </AdminRoute>
                    <AdminRoute path={`${path}/UserList`}>
                        <UserList></UserList>
                    </AdminRoute>
                </Switch>
                    
               
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
