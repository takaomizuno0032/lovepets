import * as React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import Gary1 from '../static/img/gary_1.jpg';
import Gary2 from '../static/img/gary_2.jpg';
import Gary3 from '../static/img/gary_3.jpg';
import Gary4 from '../static/img/gary_4.jpg';
import Gary5 from '../static/img/gary_5.jpg';
import Gary6 from '../static/img/gary_6.jpg';
import Gary7 from '../static/img/gary_7.jpg';
import Gary8 from '../static/img/gary_8.jpg';
import Gary9 from '../static/img/gary_9.jpg';
import Gary10 from '../static/img/gary_10.jpg';
import Gary11 from '../static/img/gary_11.jpg';
import Gary12 from '../static/img/gary_12.jpg';
import Gary13 from '../static/img/gary_13.jpg';
import { Link } from 'react-router-dom';
import ProptTypes from 'prop-types';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

// todo
// these data should be fetched from mongo.
// plan1. save images to S3, and fetch image from that.
// plan2. save images to mongo by binary.
const getItem = (imgPath) => {

    switch (imgPath) {
        case "gary_1.jpg":
            return Gary1;
            break;
        case "gary_2.jpg":
            return Gary2;
            break;
        case "gary_3.jpg":
            return Gary3;
            break;
        case "gary_4.jpg":
            return Gary4;
            break;
        case "gary_5.jpg":
            return Gary5;
            break;
        case "gary_6.jpg":
            return Gary6;
            break;
        case "gary_7.jpg":
            return Gary7;
            break;
        case "gary_8.jpg":
            return Gary8;
            break;
        case "gary_9.jpg":
            return Gary9;
            break;
        case "gary_10.jpg":
            return Gary10;
            break;
        default:
            return Gary11;
    }

}



function PetPhotos(prop) {

    const petId = Number(prop.petId);

    // data fetch
    const GET_PhotoByPetId = gql`
    query Getphotos($petId: Float!) {
        photosByPetId(_petId: $petId) {
        _id
        img
        title
        rows
        cols
        }
    }
    `;

    const { loading, error, data } = useQuery(GET_PhotoByPetId, { variables: { petId } });
    if (loading) return 'Loading...';

    if (error) return `Error! ${error.message}`;

    return (
        <ImageList
            sx={{ maxWidth: 500, height: 450, margin: '0 auto' }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {data.photosByPetId.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <Link to={`/pets/${petId}/photos/${item._id}`}>
                        <img
                            src={getItem(item.img)}
                            alt={item.title}
                            loading="lazy"
                            width={item.cols == 2 ? 242 : 121}
                            height={item.rows == 2 ? 242 : 121}
                        />
                    </Link>
                </ImageListItem>
            ))}
        </ImageList>
    );
}

PetPhotos.prototype = {
    petId: ProptTypes.number.isRequired
}


export default PetPhotos;
