import React from 'react'
import '../../../styles/footer.scss';
import { Grid, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () =>{
    return (
        <div className="footerTop">
        <Grid container>
        <Grid item sm={2}>
        <img width="50%" src="/image001.jpg" alt="pes logo" />
        </Grid>
        <Grid item lg={10} md={12}>
        <p>Project Engineering Services(popularly known as PES), is one of the fastest growing 
            Engineering Company since 1979 and are engaged in Designing, Erection, manufacturing 
            of various high quality stainless steel equipments</p><br />
        </Grid>
        <Grid item lg={4} md={12}>
        PRODUCT CATEGORIES
        <Divider />
        <ul style={{listStyleType: "none"}}>
           <li style={{marginBottom: "5px"}}><a style={{color: "white"}} to='/ACC'>Pumps</a></li>
           <li style={{marginBottom: "5px"}}><a style={{color: "white"}} to='/BCC'>Valves</a></li>
           <li style={{marginBottom: "5px"}}><a style={{color: "white"}} to='/CCC'>Fitting</a></li>
           <li style={{marginBottom: "5px"}}><a style={{color: "white"}} to='/CCC-%20Plus'>PHE</a></li>
       </ul>
        </Grid>
        <Grid item lg={4} md={12}>
        OUR SERVICES INCLUDES
        <Divider />
        <ul style={{listStyleType: "none"}}>
           <li style={{marginBottom: "5px"}}><a style={{color: "white"}} to='/ACC'>Pharmaceuticals</a></li>
           <li style={{marginBottom: "5px"}}><a style={{color: "white"}} to='/BCC'>Food</a></li>
           <li style={{marginBottom: "5px"}}><a style={{color: "white"}} to='/CCC'>Dairy</a></li>
           <li style={{marginBottom: "5px"}}><a style={{color: "white"}} to='/CCC-%20Plus'>Beverages</a></li>
       </ul>
        </Grid>
        <Grid item lg={4} md={12}>
        OFFICE ADDRESS
        <Divider />
          <ul style={{listStyleType: "none"}}>
          <li style={{marginBottom: "5px"}}><HomeIcon />&nbsp;&nbsp; 357 First Floor, FA-357, Radhey Shyam Mandir Marg, Block FA, Mansarover Garden, New Delhi, Delhi 110015</li>
          <li style={{marginBottom: "5px"}}><PhoneIcon />&nbsp;&nbsp;011-2541 7510</li>
          <li style={{marginBottom: "5px"}}><EmailIcon />&nbsp;&nbsp;subhash.sharma@gmail.com</li>
          </ul>
        </Grid>
        </Grid>
        <div className="footerBottom">
           © 2020- PES Group Pvt Ltd All Right Reserved. 
        </div>   
        </div>
    )
}

export default Footer