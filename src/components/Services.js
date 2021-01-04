import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

const Services = () => {

  return (
      <Fragment>
    <h1>Services</h1>
    <p><strong>PES Provides the broadest sanitary portfolio in the market</strong></p>
    <h2>CUSTOM MACHINING</h2>
    <p>Our network of manufacturing services includes: cutting, machining and turning, forging, 
        roll forming, tube/pipe bending, plate processing, slitting, and welding operations. If 
        you need it, we can make it.</p>
    <h2>QUALITY TESTING & CERTIFICATION</h2> 
    <p>We operate in accordance with ISO international quality controls. It is part of the "PES" style 
        of business you expect! We  ensure product quality by certifying our stock to accepted
        international standards. If you require additional testing that is beyond our standard stock
        requirements, we will be happy to provide it.</p>
    <h2>MANPOWER SUPPLY</h2>  
    <p>We provide skilled labour at your disposal so the work is done with best skilled workforce.</p>
    <Grid container>
    <Grid item lg={3} xs={12}>
    <img  src='/Images/Services/IMG-20201219-WA0006.jpg' height="300px" alt='serv1' />
    </Grid>
    <Grid item lg={3} xs={12}>
    <img src='/Images/Services/IMG-20201219-WA0007.jpg' height="300px" alt='serv2' />
    </Grid>
    <Grid item lg={3} xs={12}>
    <img src='/Images/Services/IMG-20201219-WA0008.jpg' height="300px" alt='serv3' />
    </Grid>
    <Grid item lg={3} xs={12}>
    <img src='/Images/Services/IMG-20201219-WA0009.jpg' height="300px" alt='serv4' />
    </Grid>
    </Grid>
    <h2>TRADEMARK</h2>
    <p>Astra is a trademark of PES. Astra has grown to providing technical, logistical and sales
         support. Astra is well-known for innovative products for the cable management in electrical,
         food processing industry.</p>
    <h2>PATENT</h2>  
    <p>PES holds various patents specially for electrical cable tray management system and floor drain.</p> 
    <h2>INVENTORY MANAGEMENT</h2>  
    <p>We follow "Just in Time" supply that reduces your stockholding, increases stock turn and 
        moves more control of the inventory process towards the source, reducing the chance of stock 
        shortages to the production line.</p>
    <h2>MAINTENANCE</h2>
    <p>We can implement a maintenance plan that will suit your business. Whether it be for a full
         plant maintenance shutdown or specific machinery maintenance, One of the many benefits to our 
         customers when using our maintenance services is less overhead costs of employing their own staff.</p>
    <Grid container>
    <Grid item lg={4} xs={12}>
    <img src='/Images/Services/IMG-20201219-WA0023.jpg' height="300px" alt='serv6' />
    </Grid>
    <Grid item lg={4} xs={12}>
    <img src='/Images/Services/IMG-20201219-WA0024.jpg' height="300px" alt='serv7' />
    </Grid>
    <Grid item lg={4} xs={12}>
    <img src='/Images/Services/IMG-20201219-WA0025.jpg' height="300px" alt='serv8' />
    </Grid>
    </Grid>     
    <h2>METALLURGICAL ASSISTANCE</h2>
    <p>When you have an applications question concerning temperature, corrosion, or abrasion, our staff metallurgist is here to help.</p>
    <h2>R&D</h2>
    <p>PES has its own R&D centre duly equipped and has qualified technicians who are truly dedicated
        to develop new products, new techniques for cost saving, energy saving, environmental
        friendly equipments with awareness of International standards.</p>  
    <h2>DESIGN & BUILT</h2>  
    <p>Our engineers and draughtsmen work alongside our customers to develop solutions for them. From the original concept or 
      idea we can develop a working 3D model to enable customers to view the end product well before 
      drawings are completed. From there our experienced team of engineers can put the project into action and
      follow through to completion providing a whole turnkey solution. We can also provide design build options
      for traditional engineering projects. Whether you have your own concept or require something 
      designed for you, our team of experts can help.</p> 
      <p>Services we offer include:</p> 
      <ul>
      <li>3D Modeling</li>
      <li>2D Draughting</li>
      <li>Engineering Design</li>
      <li>Budget Pricing</li>
      <li>Planning</li>
     </ul>
     <h2>ERECTION</h2> 
     <p>We Lead the way when it comes to efficient, creative options for erecting your project.
        We emphasize detailed planning and coordination between our shops, our customer and other
        trades to ensure tasks are accomplished effectively and safely. We have always followed lean
        principles such as just in time delivery as an integral part of our fabrication and erection
        processes. Our planning and coordination methods are focused at making things happen.</p>
    </Fragment>
  );
}

export default Services;