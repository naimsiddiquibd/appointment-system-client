import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { infoData } from '../../../data/data';

const InfoCard = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    infoData.map(({ Icon, title, description, background }) => <Grid item xs={12} sm={12} md={4} ld={4}>
                        <Paper varient="outland" sx={{ display: 'flex', justifyContent: 'space-around', background: background, color: '#fff', p:3, alignItems: 'center' }}>
                            <Icon sx={{ fontSize: 60 }} />
                            <div>
                                <Typography variant="body1">{title}</Typography>
                                <Typography variant="subtitle1">{description}</Typography>
                            </div>
                        </Paper>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default InfoCard;