import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Pet from './Pet';
import GaryImg from '../static/img/gary_3.jpg';
import GonImg from '../static/img/gon_1.jpg';
import { useQuery, gql } from '@apollo/client';

function Pets() {
    const pet1 = {
        name: "Gary",
        animalType: "Cat",
        type: "mix",
        gender: "male",
        description: "Ayano's cat",
        img: GaryImg,
        area: "Kumamoto"
    };
    const pet2 = {
        name: "Gontaro",
        animalType: "Cat",
        type: "exiotic",
        gender: "male",
        description: "Ayano's cat",
        img: GonImg,
        area: "Kumamoto"
    };
    const pet3 = {
        name: "Gary",
        animalType: "Cat",
        type: "mix",
        gender: "male",
        description: "Ayano's cat",
        img: GaryImg,
        area: "Kumamoto"
    };
    const pet4 = {
        name: "Gontaro",
        animalType: "Cat",
        type: "exiotic",
        gender: "male",
        description: "Ayano's cat",
        img: GonImg,
        area: "Kumamoto"
    };

    const GET_PETS = gql`
    query GetPets {
        find {
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

    const pets = [pet1, pet2, pet3, pet4];

    return (
        <React.Fragment>
            <Container>
                <Typography variant='h5' sx={{ marginBottom: 5, fontWeight: 'bold', borderLeft: 5, paddingLeft: 2, borderColor: 'custom.main' }}>
                    The list of animals
                </Typography>

                <Grid container spacing={2}>

                    {data.find.map((pet, i) => (
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

