import React from 'react';
import ProptTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Pet(props) {
    const { pet } = props;
    return (
        <Link to="/pets/id">
            <Card>
                <CardMedia
                    component="img"
                    height='300'
                    image={pet.img}
                    alt="green iguana"
                    sx={{ borderRadius: "50%" }}
                />

                <CardContent>
                    <Typography variant='h6'>
                        {pet.name}
                    </Typography>
                    <Typography>
                        {pet.gender}
                    </Typography>
                    <Typography variant='body2' color="text.secondary">
                        {pet.description}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}

Pet.prototype = {
    pet: ProptTypes.shape({
        name: ProptTypes.string.isRequired,
        animalType: ProptTypes.string.isRequired,
        type: ProptTypes.string.isRequired,
        gender: ProptTypes.string.isRequired,
        description: ProptTypes.string.isRequired,
        img: ProptTypes.string.isRequired,
        area: ProptTypes.string.isRequired,
        age: ProptTypes.number.isRequired
    })
}

export default Pet;

