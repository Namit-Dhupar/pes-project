import React from 'react';
import {Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData(name, quantity) {
    return { name, quantity };
  }

  const rows = [
    createData('Orbital Welding Machine with Printer facility', '08 Nos.'),
    createData('Projection Welding Machine	', 	'02 Nos.'),
    createData('Pulse TIG Welding Machine', '05 Nos.'),
    createData('Welding Generator', '04 Nos.'),
    createData('Welding Rectifier', '64 Nos.'),
    createData('Chain Block of various capacities', '30 Nos.'),
    createData('Channel Straightening Machine', '02 Nos.'),
    createData('Sheet Rolling Machine', '02 Nos.'),
    createData('Sheet Bending Machine', '01 Nos.'),
    createData('Drill machine / Radial drill', '03 Nos.'),
    createData('Hydraulic Hand Pallets', '20 Nos.'),
    createData('Hydraulic / Screw Jacks of various capacities', '40 Nos.'),
    createData('Crane Hydra cap. 10 Ton', '03 Nos.'),
    createData('Scaffolding', '10000 Sq. Ft.'),
    createData('Electrical Panel Mobile type', '22 Nos.'),
    createData('Cylinder Trolley', '18 Nos.'),
    createData('Working Station for Set-up making', '12 Nos.'),
    createData('Electric Ovens', '25 Nos.'),
    createData('Shifting Roller cap. 50 Tons & above', '20 Nos.'),
    createData('Hydraulic Test Pump', '08 Nos.'),
    createData('Hand Grinder, Hand Drill, Hammer Drill', '150 Nos.'),

  ];

  const useStyles = makeStyles((theme) => ({
    table: {
      maxWidth: '100%',
      [theme.breakpoints.up('sm')]: {
        maxWidth: '100%'
      },
    },
  }));

const Capabilities= () => {
    const classes = useStyles();
    return (
        <div>
          <Grid container>
            <Grid item xs={12}>      
            <h1>Company</h1>
                  <h3><strong>PES Group</strong></h3>
                  <p><strong>Project Engineering Services (PES) :</strong></p>
                  <p>Undertakes turn-key contracting Woks in F&B Sectors including Dairies, Breweries, 
                    Distilleries, Frozen Food plants etc.</p>
                  <p><strong>EN Project & Engineering Industries Pvt.Ltd/Gurgaon :</strong></p>
                  <p>Undertakes Contracting Works in Food Processing, Confectionary, Beverage 
                  plants besides responsible for our manufacturing & Fabrication Works at our
                  factories.</p>
                  <p><strong>PES Stainless Equipments Pvt.Ltd./New Delhi :</strong></p>
                  <p> Being Chanel Partner & Distributor to number of Global leading Co’s: Deals 
                  in supply of Alfa-Laval, CSE & ASTRA SS Valves, SS Pipes & Fittings, Beverage 
                  Filters, Sanitary Pumps, Pall Filters, PHEs, Anderson & Negele Process Instruments,
                  Mech Seals of CinchSeals for low speed Mixtures</p>
                  <p><strong>Our Vision & Mission</strong></p>
                  <p>To achieve total customer satisfaction’ & gain Customer Confidence by giving 
                  perfect solutions following quality & Industry Codes and set our own bench marks 
                  which would define the standards of Industry.</p>
                  <p><strong>Our Success Story</strong></p>
                  <p>Since our operations from 1979, our major strengths are in Fabrication, Supply &
                  Installation of various projects including Process & Utility Piping works for 
                  Dairies, Beverage plants, most of F & B Sector plants, CIP Systems, owning to
                  our specialized teams of  qualified & experienced  Project Engineers, Welders,
                  Fitters, Helpers, Operators,  Electricians etc.</p>
                  <p>PES offers personalized services, quality products, and superior technical 
                  support before and after the sale. We invite you to join our family and discover 
                  for yourself what we mean by personalized service.</p>
                  <p><strong>Patents (PES Gp.Co’s)</strong></p>
                  <p>We have no.of Patents for our special & proven designs for our various products 
                  like : Cable Trays, Floor Drains etc.</p>
                  <p><strong>Our Specialization</strong></p>
                  <p>We provide value-added process components and systems for hygienic processes.
                   We will understand the needs of our customers and work as a team to fill those
                   needs.</p>
                   <p><strong>Our Values</strong></p>
                   <ul>
                       <li>Customers</li>
                       <li>Provide perfect solutions</li>
                       <li>Reliability</li>
                       <li>Respect</li>
                       <li>Encouragement</li>
                       <li>Honesty</li>
                       <li>Learning</li>
                       <li>Continuous Improvement</li>
                       <li>Fun and Community</li>
                       <li>After market Sevices</li>
                       <li>Customer Feed-back reports</li>
                       <li>Forming team with customers</li>
                   </ul>
                </Grid>
                </Grid>
            <h3>CAPABILITIES</h3>
            <p>MANUFACTURING OF SS 304, SS 316 WITH HIGH QUALITY  PRODUCTS WITH FINISHING</p>
            <Grid container>
            <Grid item lg={3} xs={12}> 
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
            <Grid item lg={3} xs={12}>
            <img src='/Images/Capabilities/Cap1.jpg' alt='cap1' />
            </Grid>
            <Grid item lg={3} xs={12}>
            <img src='/Images/Capabilities/Cap2.jpg' alt='cap2' />
            </Grid>
            <Grid item lg={3} xs={12}>
            <img src='/Images/Capabilities/Cap3.jpg' alt='cap3' />
            </Grid>
            </Grid>

             <p>ERECTION, SITE ACTIVITIES AND MAN POWER</p>
             <p><strong>PES</strong> has over 450 dedicated well-experienced, qualified & skilled manpower to complete 
             the projects well in time with high quality & workmanship. <strong>PES</strong> is engaged in Erection
             activities having Service Tax, ESI, PF & other Government Registration required for
             proper Erection business. Our PES’s group teams are staffed with qualified NCCCO 
             Certified Crane operators, have no. of our own cranes as well,  are AISC Certified
             for advance Steel erection.</p>

            <Grid container>
             <Grid item lg={3} xs={12}>
             <img src='/Images/Capabilities/Cap4.jpg' alt='cap4' />
             </Grid>
             <Grid item lg={3} xs={12}>
             <img src='/Images/Capabilities/Cap5.jpg' alt='cap5' />
             </Grid>
             <Grid item lg={3} xs={12}>
             <img src='/Images/Capabilities/Cap6.jpg' alt='cap6' />
             </Grid>
             <Grid item lg={3} xs={12}>
             <img src='/Images/Capabilities/Cap7.jpg' alt='cap7' />
             </Grid>
            </Grid>
            <ul><strong>
                <li>POST ENGINEERING</li>
                <li>EQUIPMENT & PIPING LAYOUT, FLOW DIGRAMS, 3 D MODELS,</li>
                <li>EQUIPMENT INSTALLATION (ROTARY AND STATIC)</li>
                <li>PLACING &  ALLIGNMENT OF EQUIPMENT</li>
                <li>PIPING (PROCESS & UTILITY AREAS, REFRIGERATION SYSTEMS)</li>
                <li>STRUCTURE FABRICATION AND ERECTION (MS, SS, GI) LIKE TANKS, PLATFORMS ETC.</li>
                <li>PRESSURING TESTING</li>
                <li>ALL ELECTRICALS & PANELS</li>
                <li>CABLE TRAY INSTALLATION</li>
                <li>PCHARGING & COMMISONING</li>
                <li>TESTING & TRIAL RUNS</li>
                <li>SHOWING OPERATION & HANING OVER THE PLANY TO USER</li>
                <li>GIVE TRAINING TO USER’S OPERATORS</li>
                </strong>
            </ul>
            <p><strong>SAFETY FIRST</strong></p>
            <ol>
            <li>We maintain high quality Safety norms at our works as well as for site activities.
             We provide safe working conditions, and also provide our employees with appropriate
             protection from exposure to hazardous materials.  Dedicated trained Safety
             Supervisors are employed by us to train our workforce time to time.</li><p></p>
             <li>At sites, in plant area, we use display cards for Safety Norms to be followed by our man power</li><p></p>
             <li>Use of all Safety equipment while working & keep giving Safety traing to our Workers</li><p></p>
             <li>Maintain proper documents</li>
             </ol>
             <p><u>MACHINE TOOLS & TACKLES FOR INSTALLATION JOBS</u></p>
 
      <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Quantity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.quantity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>  
    </TableContainer>
    <p>We keep modulating  by adding extra equipment as required by our sites.</p>
    <p>We have our own stores , godown & Site Offices at different sites in our movable 
    multi-containers besides at times Customer also provide such facility.</p>
 </div>
    )
}

export default Capabilities
