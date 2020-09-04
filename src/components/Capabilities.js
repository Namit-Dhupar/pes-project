import React from 'react';
import {Grid} from '@material-ui/core';

const Capabilities=() => {
    return (
        <div>
            <h1>CAPABILITIES</h1>
            <p>MANUFACTURING OF SS 304, SS 316 WITH HIGH QUALITY  PRODUCTS WITH FINISHING</p>
            <Grid container>
            <Grid item lg={4} xs={12}> 
            <ul><strong>
                <li>TANK (SS, MS)</li>
                <li>VASSEL</li>
                <li>PESTEURIZER MODULE</li>
                <li>CABLE TRAY WITH ELECTROPOLISH</li>
                <li>PHE</li>
                <li>PUMP</li>
                <li>CIP MODULE</li>
                <li>CONVEYOR</li>
                <li>SS VALVES & FITTINGS</li>
                <li>SS PIPES</li>
                <li>CABLE TRAYS</li>
                <li>DRAIN COVERS</li>
                <li>COMPONENTS</li>
                </strong>
            </ul>
            </Grid>
            <Grid item lg={2} xs={12}>
            <img src='/Images/Capabilities/Cap1.jpg' alt='cap1' />
            <img src='/Images/Capabilities/Cap2.jpg' alt='cap2' />
            </Grid>
            {/* <Grid item lg={2} xs={12}>
            <img src='/Images/Capabilities/Cap2.jpg' alt='cap2' />
            </Grid>
            <Grid item lg={2} xs={12}>
            <img src='/Images/Capabilities/Cap3.jpg' alt='cap3' />
            </Grid>
            <Grid item lg={2} xs={12}>
            <img src='/Images/Capabilities/Cap4.jpg' alt='cap4' />
            </Grid> */}
            </Grid>
        </div>
    )
}

export default Capabilities
