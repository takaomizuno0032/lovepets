import React from 'react';
import { Avatar, Typography, Grid, TableContainer, Box, Table, TableRow, TableCell, TableBody } from '@mui/material';
import GaryImg from '../static/img/gary_3.jpg';
import GonImg from '../static/img/gon_1.jpg';
import { Container } from '@mui/system';
import PetsIcon from '@mui/icons-material/Pets';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import PetPhotos from '../components/PetPhotos';

const paths = { '../static/img/gary_3.jpg': GaryImg, '../static/img/gon_1.jpg': GonImg }

function createData(label, data) {
    return { label, data }
}

function PetDetail(prop) {
    const id = Number(useParams().id);

    const GET_PET = gql`
    query GetPet($id: Float!) {
        pet(_id: $id) {
        _id
        name
        animalType
        type
        gender
        description
        img
        area
        age
        }
    }
    `;

    const { loading, error, data } = useQuery(GET_PET, { variables: { id } });

    if (loading) return 'Loading...';

    if (error) return `Error! ${error.message}`;

    const rows = [
        createData("name", data.pet.name),
        createData("type", data.pet.type),
        createData("gender", data.pet.gender),
        createData("age", data.pet.age),
        createData("area", data.pet.area)
    ]


    const imgPath = '../static/img/' + data.pet.img;
    const img = paths[imgPath];

    return (
        <Container>
            <Box sx={{ margin: 3 }}>
                <PetsIcon sx={{ color: 'custom.dark' }} />
                <Typography variant='h5' sx={{ fontWeight: 'bold', paddingLeft: 2, display: 'inline-block' }}>
                    Information
                </Typography>

            </Box>
            <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                    <Avatar
                        alt="gary"
                        src={img}
                        sx={{ height: 400, width: 300, margin: '0 auto' }}
                    />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', borderLeft: 5, paddingLeft: 2, borderColor: 'custom.light', margin: 3 }}>
                        detail
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {rows.map((row, i) => (
                                    <TableRow
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{row.label}</TableCell>
                                        <TableCell>{row.data}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Grid>
            <Box sx={{ margin: 3 }}>
                <PetsIcon sx={{ color: 'custom.dark' }} />
                <Typography variant='h5' sx={{ fontWeight: 'bold', paddingLeft: 2, display: 'inline-block' }}>
                    Introduce myself
                </Typography>
                <Typography>
                    {data.pet.description}
                </Typography>
            </Box>
            <Box sx={{ margin: 3 }}>
                <PetsIcon sx={{ color: 'custom.dark' }} />
                <Typography variant='h5' sx={{ fontWeight: 'bold', paddingLeft: 2, display: 'inline-block' }}>
                    Photo list
                </Typography>
                {/* ペットのidを渡す */}
                <PetPhotos petId={id} />
            </Box>


        </Container>
    );
}

export default PetDetail;