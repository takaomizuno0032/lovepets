import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import JumbotronImg from '../static/img/gary_1.jpg';

function Jumbotron() {
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${JumbotronImg})`,
                minHeight: '500px'
            }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            仮app name
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            Find cute pets' photoes
                        </Typography>

                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Jumbotron;