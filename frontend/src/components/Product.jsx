import React from 'react';
import ProptTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Product(props) {
    const { product } = props;
    return (
        <Link to="/products/id">
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    image={product.img}
                    alt="green iguana"
                    sx={{ width: "150px", height: "100px" }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography variant='h6'>
                            {product.name}
                        </Typography>

                        <Typography variant='body2' color="text.secondary">
                            {product.description}
                        </Typography>
                    </CardContent>

                </Box>



            </Card>
        </Link>
    );
}

Product.ProptTypes = {
    product: ProptTypes.shape({
        name: ProptTypes.string.isRequired,
        img: ProptTypes.string.isRequired,
        description: ProptTypes.string.isRequired
    })
}

export default Product;