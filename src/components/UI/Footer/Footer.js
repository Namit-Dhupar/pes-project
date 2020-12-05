import React from 'react'
import '../../../styles/footer.scss';
import { Grid, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    divider: {
      backgroundColor: "black",
      width: "350px"
    },
    linkStyle: {
      marginBottom: "5px"
    },
    anchorStyle: {
      color: "black", 
      textDecoration: "none", 
      cursor: "default"
    }
  }));

const Footer = () =>{
    let d = new Date();
    let year = d.getFullYear();
    const classes = useStyles();
    return (
        <div className="footerTop">
        <Grid container>
        <Grid item sm={2}>
        <img width="50%" src="/image001.jpg" alt="pes logo" />
        </Grid>
        <Grid item lg={10} md={12}>
        {/* <p>Project Engineering Services(popularly known as PES), is one of the fastest growing 
            Engineering Company since 1979 and are engaged in Designing, Erection, manufacturing 
            of various high quality stainless steel equipments</p> */}
         <h3>Everything you need. Whenever you need. The Complete Line Solution</h3>   
        <br />
        </Grid>
        <Grid item lg={4} md={12}>
        PRODUCT CATEGORIES
        <Divider className={classes.divider} />
        <ul style={{listStyleType: "none"}}>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/products'>Pumps</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/products'>Valves</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/products'>Fitting</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/products'>PHE</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/products'>Accessories & More</a></li>
       </ul>
        </Grid>
        <Grid item lg={4} md={12}>
        OUR SERVICES INCLUDES
        <Divider className={classes.divider} />
        <ul style={{listStyleType: "none"}}>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/services'>Pharmaceuticals</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/services'>Food</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/services'>Dairy</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/services'>Beverages</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/services'>Personal Care</a></li>
       </ul>
        </Grid>
        <Grid item lg={4} md={12}>
        OFFICE ADDRESS
        <Divider className={classes.divider} />
          <ul style={{listStyleType: "none"}}>
          <li className={classes.linkStyle}><HomeIcon />&nbsp;&nbsp; FA-357, Mansarover Garden, Radhey Shyam Mandir Marg, New Delhi, Delhi 110015</li>
          <li className={classes.linkStyle}><PhoneIcon />&nbsp;&nbsp;011-2541 7510, 2546 6316</li>
          <li className={classes.linkStyle}><EmailIcon />&nbsp;&nbsp;info@pesgroup.co.in</li>
          </ul>
        </Grid>
        </Grid>
        <div className="footerBottom">
           © {year}- PES Group Pvt Ltd All Right Reserved. 
        </div>   
        </div>
    )
}

export default Footer