import React from 'react';
import Pets from '../components/Pets';
import Products from '../components/Products';
import Jumbotron from '../components/Jumbotron';

function Home() {


    return (
        <React.Fragment>
            <Jumbotron />
            <Pets />
            <Products />
        </React.Fragment>
    );
}

export default Home;