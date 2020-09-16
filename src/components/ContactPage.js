import React, {Fragment} from 'react';
import '../styles/contacts.scss';
import { TextField, Grid, Button } from '@material-ui/core/';
import SendIcon from '@material-ui/icons/Send';

const ContactPage = () => {
    return (
        <Fragment>
        <div className='contact-body'>
        <h1>Contact Us</h1>
        <div style={{textAlign: 'center'}}>
          <h2 style={{color: '#0000FF'}}><strong>PROJECT ENGINEERING SERVICES</strong></h2>
          <p>FA-357 Mansarover Garden, New Delhi-110027</p>
          <p>Contact No:-011-25417510, 25466316</p>
        </div>
        <div className="row">
        <div className="column">
     <form noValidate autoComplete="off">
     <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant='outlined'
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant='outlined'
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            variant='outlined'
            id="email"
            name="email"
            label="E-Mail"
            fullWidth
            autoComplete="Email-Address"
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="comments"
          label="Comments or Message"
          multiline
          rows={5}
          variant="outlined"
        />
        </Grid>
        <Grid item xs={12}>
        <Button
        variant="contained"
        style={{backgroundColor: ' #068DDB', color: 'white'}}
        endIcon={<SendIcon />}
        >
        Send
      </Button>
      </Grid>
      </Grid>
    </form>
        </div>
        <div className="column">
        <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
        <iframe title="myFrame" className="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14005.838024677094!2d77.130386!3d28.645957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e9747ac44dc47cc!2sSbl%20Computer%20Education!5e0!3m2!1sen!2sin!4v1600197051319!5m2!1sen!2sin" 
       frameBorder="0" allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
        </Grid>
        </Grid>
        </div>
      </div>
      </div>
      </Fragment>
    )
}

export default ContactPage