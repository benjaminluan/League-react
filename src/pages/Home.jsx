import React from 'react';
import Landing from '../ui/Landing';
import Recommended from '../ui/Recommended';

const Home = ({allChampions}) => {
    return (
        <>
        <Landing />
        <Recommended/>
        </>
    )
}

export default Home;
