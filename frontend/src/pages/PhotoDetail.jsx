import * as React from 'react';
import { ImageListItem, Box, Typography, Grid, Button, Stack } from '@mui/material';
import { Container } from '@mui/system';
import SumpleImg from '../static/img/gary_1.jpg';
import PetsIcon from '@mui/icons-material/Pets';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';



function PhotoDetail(prop) {
    const petId = Number(useParams().id);

    return (
        <Container>
            <Box sx={{ margin: 3 }}>
                <PetsIcon sx={{ color: 'custom.dark' }} />
                <Typography variant='h5' sx={{ fontWeight: 'bold', paddingLeft: 2, display: 'inline-block' }}>
                    Photo detail
                </Typography>
            </Box>
            <Stack spacing={2} direction='row' sx={{ margin: 2 }}>
                <Button variant='contained' startIcon={<DownloadIcon />} color='custom'>Download</Button>
                <Button variant='outlined' startIcon={<DeleteIcon />} color='custom'>Delete</Button>

            </Stack>
            <Grid container spacing={2}>
                <Grid item xs={10} md={7} lg={7}>
                    <ImageListItem cols={4}>
                        <img src={SumpleImg}></img>
                    </ImageListItem>

                </Grid>
            </Grid>

        </Container>
    );

}



export default PhotoDetail;