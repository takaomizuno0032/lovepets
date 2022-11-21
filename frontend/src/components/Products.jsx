import React from 'react';
import { Typography, Grid, Container } from '@mui/material';
import ShirtImg from '../static/img/shirt1.jpg';
import Product from './Product';


function Products() {
    const product1 = {
        name: 'shirt',
        img: ShirtImg,
        description: "This is shirt"
    };

    const products = [product1];

    return (
        <React.Fragment>
            <Container>
                <Typography variant='h5' sx={{ marginBottom: 5, fontWeight: 'bold', borderLeft: 5, paddingLeft: 2, borderColor: 'custom.main' }}>
                    The list of products
                </Typography>
                <Grid container spacing={2}>
                    {products.map((product, i) => (
                        <Grid key={i} item xs={12} md={12} lg={12} marginBottom={3}>
                            <Product key={i} product={product} />
                        </Grid>
                    ))}


                </Grid>

            </Container>

        </React.Fragment>
    );
}

export default Products;