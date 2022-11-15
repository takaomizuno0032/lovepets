import React from 'react';
import ProptTypes from 'prop-types';
import { Avatar, Typography, Grid, TableContainer, Box, Table, TableRow, TableCell, TableBody } from '@mui/material';
import GaryImg from '../static/img/gary_3.jpg';
import PadIcon from '../static/img/catpad.png';
import { Container } from '@mui/system';
import PetsIcon from '@mui/icons-material/Pets';

function createData(label, data) {
    return { label, data }
}


function PetDetail(prop) {

    // This data should be fetched from database
    const pet1 = {
        name: "Gary",
        animalType: "Cat",
        type: "mix",
        gender: "male",
        description: "Ayano's cat",
        img: GaryImg,
        area: "Kumamoto",
        age: 2
    };


    const rows = [
        createData("name", pet1.name),
        createData("type", pet1.type),
        createData("gender", pet1.gender),
        createData("age", pet1.age),
        createData("area", pet1.area)
    ]





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
                        src={pet1.img}
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
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
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
                    {pet1.description}
                </Typography>
            </Box>

        </Container>
    );
}

export default PetDetail;