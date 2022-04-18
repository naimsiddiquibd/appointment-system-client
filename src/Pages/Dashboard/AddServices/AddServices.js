import React, { useEffect, useState } from 'react';
import { Button, Grid, Input, TextField } from '@mui/material';
import ServicesList from '../ServicesList/ServicesList';

const AddServices = () => {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [price, setPrice] = useState('');
    const [space, setSpace] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!time) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('time', time);
        formData.append('price', price);
        formData.append('space', space);

        fetch('https://thawing-shelf-40149.herokuapp.com/services', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
                    console.log('doctor added successfully')
                    const remainingUsers = services.filter(services)
                    setServices(remainingUsers)
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://thawing-shelf-40149.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h3>Add A Services</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '70%' }}
                    label="Service Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '70%' }}
                    label="Time"
                    required
                    onChange={e => setTime(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '70%' }}
                    label="Price"
                    type="text"
                    required
                    onChange={e => setPrice(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '70%' }}
                    label="Space"
                    type="text"
                    required
                    onChange={e => setSpace(e.target.value)}
                    variant="standard" />
                <br />
                
                <br />
                <Button variant="contained" type="submit">
                    Add Service
                </Button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
            </Grid>
            <Grid item xs={6}>
                    {
                        services.map(service => <ServicesList
                            key={service._id}
                            service={service}
                        ></ServicesList>)
                    }
            </Grid>
            </Grid>
        </div>
    );
};

export default AddServices;