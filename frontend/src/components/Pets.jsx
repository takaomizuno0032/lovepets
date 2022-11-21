import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Pet from './Pet';
import { useQuery, gql } from '@apollo/client';

function Pets() {

    const GET_PETS = gql`
    query GetPets {
        pets {
        _id
        name
        animalType
        type
        gender
        description
        img
        area
        }
    }
    `;


    const { loading, error, data } = useQuery(GET_PETS);

    if (loading) return 'Loading...';

    if (error) return `Error! ${error.message}`;

    return (
        <React.Fragment>
            <Container>
                <Typography variant='h5' sx={{ marginBottom: 5, fontWeight: 'bold', borderLeft: 5, paddingLeft: 2, borderColor: 'custom.main' }}>
                    The list of animals
                </Typography>

                <Grid container spacing={2}>

                    {data.pets.map((pet, i) => (
                        <Grid key={i} item xs={12} md={3} marginBottom={3}>
                            <Pet key={i} pet={pet} />
                        </Grid>
                    ))}

                </Grid>

            </Container>

        </React.Fragment>
    );
}

export default Pets;

