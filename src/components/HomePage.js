import React from 'react';
import Carousel from './UI/Carousel/Carousel'
import Grid from '@material-ui/core/Grid';

const HomePage = () => {
    return (
        <div>
            <Grid container>
            <Grid item xs={12}>
            <Carousel />
            </Grid>
            </Grid>
        </div>
    )
}

export default HomePage