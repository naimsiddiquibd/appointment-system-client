import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';

const DoctorsList = ({ doctor }) => {
    const { name, title, description, image } = doctor;
    return (
    <div>
    <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>

      <Box> 
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={`data:image/png;base64,${image}`} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', mr: 1 }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {title}
              </Typography>
              {description}
            </React.Fragment>
          }
        />
        <Button size="small" startIcon={<DeleteIcon />}>
        Delete
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
      </Box> 

    </List>
    </div>
    );
};

export default DoctorsList;