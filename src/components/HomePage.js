import React, {Fragment} from 'react';
import Carousel from './UI/Carousel/Carousel';
import ClientCarousel from './UI/Carousel/CarouselClient'
import {Grid, Button} from '@material-ui/core';
import '../styles/homepage.scss';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
          <Fragment >
            <Carousel/>
            <Grid container>
            <Grid item lg={6} xs={12}>      
            <h1>About Us</h1>
            <h3>Project Engineering Services</h3>
            <p><strong>‘Project Engineering Services’ (popularly known as PES)</strong>, is 
              one of the fastest growing Engineering Company since 1979 and 
              are engaged in Designing, Erection, manufacturing of various high
              quality stainless steel equipments & Supply of Hygiene Pipe & Fittings
              used mainly in Soft Drink, Dairy, Chocolate, Food Processing, Breweries,
              Confectionery, Refrigeration & Allied Industries etc.The Company is 
              professionally managed by a group of qualified Engineers and Technocrats
              with vast experience in the field.</p>
              <p></p>
              <p>Today <strong>PES</strong> is an ISO 9001 : 2000 Certified Company registered under Small Scale 
                  Industries in Delhi is a major player in providing the advance Technical services, 
                  economic solution to our valued Cutomers, the farmers / rural people with main 
                  focus on Dairy, Food & Beverage Industries.</p>
                </Grid>
                <Grid item lg={6} xs={12}>   
                <img className="AboutImage" src="/Images/home.jpg" alt="Pump Sample" />
                </Grid>
                </Grid>
                <br />
                <div className="heading">
                <h1>OUR POPULAR PRODUCTS</h1>
                <h3>Our Latest Product</h3>

                {/*PUMP PRODUCT */}
                <Grid container className="Product">
                <Grid item lg={3} xs={12}> 
                <Link className="bard" to="#" style={{backgroundImage: "url(/Images/Puma-Pump.jpg)"}}>
                  <p>PUMPS</p>
                <div>
                  <h1>Pumps</h1>
                </div>   
                </Link>
                </Grid>

                 {/*TUBE PRODUCT */}
                 <Grid item lg={3} xs={12}> 
                 <Link className="bard" to="#" style={{backgroundImage: "url(/Images/REFRIGERATION-SYSTEM.jpg)"}}>
                  <p>REFRIGERATION SYSTEM</p>
                <div>
                  <h1>REFRIGERATION SYSTEM</h1>
                </div>   
                </Link>
                </Grid>

                 {/*HOMOGENIZER PRODUCT */}
                 <Grid item lg={3} xs={12}> 
                 <Link className="bard" to="#" style={{backgroundImage: "url(/Images/HOMOGENIZER.jpg)"}}>
                  <p>HOMOGENIZER</p>
                <div>
                  <h1>HOMOGENIZER</h1>
                </div>   
                </Link>
                </Grid>

                 {/*VALVES PRODUCT */}
                 <Grid item lg={3} xs={12}> 
                 <Link className="bard" to="#" style={{backgroundImage: "url(/Images/BULK-COOLER.jpg)"}}>
                  <p>BULK COOLER</p>
                <div>
                  <h1>BULK COOLER</h1>
                </div>   
                </Link>
               </Grid>
               </Grid>
               </div>

               <br />
                <div className="heading">
                <h1>OUR CLIENTS</h1>
                <p className="title">We are providing our products and services to some of the very esteemed clients in 
                the industry who are satisfied with our products and after sales service. Here are the few:</p>
                <Grid container>
                  <Grid item xs={12}>
                <ClientCarousel />
                </Grid>
                </Grid>
               </div>
               <br />
               <div className="Download">
                 <br />
                 <h2>CREATE OWN BUSINESS WITH OUR IDEAS</h2>
                 <p>We undertake turnkey projects for dairy, candy, juices, chocolate industry and 
                   like and are dedicated to provide you the best product with our expertise and
                    dedicated team of professionals. You think it, we make it.</p>
                 <br />
                 <a style={{textDecoration:'none'}} href='/Catalogue.PDF' download='PES Brochure'>
                <Button variant="contained" style={{backgroundColor:"#3c2344", color:"#ffffff", marginBottom:"2%"}}>
                 Download Brochure
                 </Button></a>
               </div>
            </Fragment>   
    )
}

export default HomePage