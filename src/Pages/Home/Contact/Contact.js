import { TextFields } from '@mui/icons-material';
import { Container, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import MuiButton from '../../../StyleComponent/MuiButton';

const Contact = () => {
    const useStyle = makeStyles({
        root: {
            background: '#3A4256',
            height: 600,
            textAlign: 'center',
            padding: '75px',
            marginTop: '75px'
        },
        textArea: {
            border: 0,
            outline: 0,
            width: '100%',
            margin: '20px 0'
        },
    });
    const { root, textArea } = useStyle()
    return (
        <div className={root}>
            <div>
                <Container maxWidth="md" sx={{ paddingBottom: '100px', alignItems: 'center' }}>
                    <Typography variant="h6" color="#19D3AE">Contact Us</Typography>
                    <Typography variant="h4" color="#fff">Always Contact with Us</Typography>
                    <TextField
                        fullWidth
                        placeholder="Email"
                        margin="normal"
                        required
                        sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    />
                    <TextField
                        fullWidth
                        placeholder="Subject"
                        margin="normal"
                        required
                        sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    />
                    <TextField
                        fullWidth
                        placeholder="Your Message"
                        margin="normal"
                        required
                        multiline
                        rows={4}
                        rowsMax={6}
                        sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                    />
                    {/* <textarea rows={10} className={textArea} placeholder="Your Message"></textarea> */}
                    <MuiButton sx={{ my: '15px' }}>Submit</MuiButton>
                </Container>
            </div>
        </div>
    );
};

export default Contact;