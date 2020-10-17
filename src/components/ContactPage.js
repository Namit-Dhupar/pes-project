import React, {useState} from 'react';
import emailjs from 'emailjs-com'
import '../styles/contacts.scss';
import { TextField, Grid, Button, Divider } from '@material-ui/core/';
import SendIcon from '@material-ui/icons/Send';
import ShowMessage from './UI/Snackbar/Snackbar';

const ContactPage = () => {
 
  const [SnackStatus, setSnackStatus] = useState(false);
  const [SnackSeverity, setSnackSeverity] = useState("");
  const [SnackMessage, setSnackMessage] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const EmptyFields = () =>{
    setfirstName('');
    setlastName('');
    setEmail('');
    setMessage('');
  }

  const MessageOnError = () => {
    setSnackStatus(true);
    setSnackSeverity("error");
    setSnackMessage("Please fill all the fields properly");
  }

  const MessageOnSuccess = () => {
    setSnackStatus(true);
    setSnackSeverity("success");
    setSnackMessage("Message sent successfully, You will hear back from us soon");
  }

  const MessageOnEmailError = () => {
    setSnackStatus(true);
    setSnackSeverity("error");
    setSnackMessage("Something went wrong, Please Try Again");
  }

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackStatus(false);
  };

  const HandleSubmit = (e) =>{
    e.preventDefault();
    if(firstName==='' || lastName==='' || Email==='' || Message===''){
      MessageOnError();
      return false;
    }
    emailjs.sendForm('service_ui2fxfe', 'template_tkfbzmb', e.target, 'user_EbpVBhTysz7uzWLDMINIC')
      .then((result) => {
          console.log(result.text);
          MessageOnSuccess();
          EmptyFields();        
      }, (error) => {
          console.log(error.text);
          MessageOnEmailError();
      });
  }

    return (
        <div className='contact-body'>
          <ShowMessage status={SnackStatus} 
          color={SnackSeverity}
          message={SnackMessage}
          onclose={handleSnackClose}/>
        <h1>Contact Us</h1>
        <div style={{textAlign: 'center'}}>
          <h2 style={{color: '#0000FF'}}><strong>PROJECT ENGINEERING SERVICES</strong></h2>
          <p>FA-357 Mansarover Garden, New Delhi-110027</p>
          <p>Contact No:-011-25417510, 25466316</p>
        </div>
        <div className="row">
        <div className="column">
     <form noValidate autoComplete="off" onSubmit={HandleSubmit}>
     <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={e=>setfirstName(e.target.value)}
            value={firstName}
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
            onChange={e=>setlastName(e.target.value)}
            variant='outlined'
            value={lastName}
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
            onChange={e=>setEmail(e.target.value)}
            variant='outlined'
            value={Email}
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
          onChange={e=>setMessage(e.target.value)}
          fullWidth
          value={Message}
          id="message"
          name="message"
          label="Message"
          multiline
          rows={5}
          variant="outlined"
        />
        </Grid>
        <Grid item xs={12}>
        <Button
        type="submit"
        variant="contained"
        style={{backgroundColor: ' #068DDB', color: 'white'}}
        endIcon={<SendIcon />}
        >
        Send Enquiry
      </Button>
      </Grid>
      </Grid>
    </form>
        </div>
        <div className="column">
        <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
        <iframe title="myFrame" className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.150376820692!2d77.1283195348877!3d28.64249149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0316c0000001%3A0xa4b08047e3bc687d!2sPROJECT%20ENGINEERING%20SERVICES!5e0!3m2!1sen!2sin!4v1602934402344!5m2!1sen!2sin" 
       frameBorder="0" allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
        </Grid>
        </Grid>
        </div>
      </div>
      <Divider />
      <h2 style={{textAlign: 'center'}}>Our Sister Companies</h2>
      <Grid container>
        <Grid item lg={6} sm={12}>
          <h3>PES Stainless Steel Pvt Ltd</h3>
          <p>C-2/11 PES Stainless Equipment, Rajouri Garden, New Delhi, Delhi 110027</p>
          <iframe title="myFrame" className="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14005.88789852091!2d77.1249931!3d28.6455835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaac431036489e3aa!2sPes%20Stainless%20Equipment!5e0!3m2!1sen!2sin!4v1602935892046!5m2!1sen!2sin" 
       frameBorder="0" allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
        </Grid>
        <Grid item lg={6} sm={12}>
          <h3>E N Project & Engg Industries Private Limited</h3>
          <p>Plot 41, Maruti Industrial Area, Sector 18, Gurugram, Haryana 122008</p>
          <iframe title="myFrame" className="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14026.784911056071!2d77.0636765!3d28.4886936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd644519c47de614!2sE%20N%20Project%20%26%20Engg%20Industries%20Private%20Limited!5e0!3m2!1sen!2sin!4v1602935994608!5m2!1sen!2sin" 
       frameBorder="0" allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
        </Grid>
      </Grid>
      </div>
    )
}

export default ContactPage