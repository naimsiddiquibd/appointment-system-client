import * as React from 'react';
import { Grid } from '@mui/material';
import DoctorsList from '../DoctorsList/DoctorsList';

const RemoveDoctor = () => {

    const [doctors, setDoctors] = React.useState([]);

    React.useEffect(() => {
        fetch('https://thawing-shelf-40149.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
           <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <DoctorsList
                            key={doctor._id}
                            doctor={doctor}
                        ></DoctorsList>)
                    }
            </Grid>
        </div>
    );
};

export default RemoveDoctor;