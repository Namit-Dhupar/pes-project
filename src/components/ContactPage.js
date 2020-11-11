import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Generatepdf from './UI/pdfmodule/Generatepdf';
import '../styles/contacts.scss';
import { TextField, Grid, Button, Divider } from '@material-ui/core/';
import GetAppIcon from '@material-ui/icons/GetApp';
import SendIcon from '@material-ui/icons/Send';
import ShowMessage from './UI/Snackbar/Snackbar';

const ContactPage = () => {
 
  const [SnackStatus, setSnackStatus] = useState(false);
  const [SnackSeverity, setSnackSeverity] = useState("");
  const [SnackMessage, setSnackMessage] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");
  const [Company, setCompany] = useState("");
  const [generate, setgenerate] = useState(false);
  const [generateUri, setgenerateUri] = useState(false);
  const [allowDownload, setallowDownload] = useState("");
  const enquiredProducts = useSelector(state => state.enquiry.products);
  
  const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
  const regexPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  // eslint-disable-next-line 
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    const badgeLength = [].concat.apply([], enquiredProducts.map((el) =>el.Subtype.filter(p => p.isEnquired === true)));
    setallowDownload(badgeLength.length);
  }, [enquiredProducts])

  const EmptyFields = () =>{
    setfirstName('');
    setlastName('');
    setEmail('');
    setMessage('');
    setPhone('');
    setCompany('');
    localStorage.removeItem("Base64");
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

  const MessageonPhone = () =>{
    setSnackStatus(true);
    setSnackSeverity("error");
    setSnackMessage("Please enter a valid phone number");
  }

  const MessageOnMail = () =>{
    setSnackStatus(true);
    setSnackSeverity("error");
    setSnackMessage("Please enter a valid Email")
  }

  const MessageOnEmailError = () => {
    setSnackStatus(true);
    setSnackSeverity("error");
    setSnackMessage("Server can't respond, You can download the enquiry and mail us at info@pesgroup.co.in");
  }

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackStatus(false);
  };

  const togglegenerateUri = () => {
    setgenerateUri(!generateUri);
  }

  const toggleGenerate = () => {
    setgenerate(!generate);
  }

  function sendMail() {
    window.Email.send({
      SecureToken : "32c831be-ec17-46b2-8e05-fd167211981e",
      To : 'namitmatrix@gmail.com',
      From : "namitmatrix@gmail.com",
      Subject : `New Enquiry from ${firstName} ${lastName} from website`,
      Body : `<html>
              <p>${Message}</p>
              <br />
              <p>___________________</p>
              <p>E-mail ID: ${Email}</p>
              <p>Phone Number:${Phone}</p>
              <p>Company Name: ${Company}</p></iframe></p>
              </html>
              `,                 
      Attachments : (allowDownload > 0) ? [
	    {
	    	name : "Enquiry.pdf",
	    	data : "data:application/pdf;base64,"+localStorage.getItem("Base64")
      }] 
      : ''               
   }).then(message => {
     if(message === "OK"){
      MessageOnSuccess();
      EmptyFields();
     }
     else {
      MessageOnEmailError();
     }
   });
   }

  const HandleSubmit = (e) =>{
    e.preventDefault();
    if(firstName==='' || lastName==='' || Email==='' || Message==='' || Phone==='' || Company === '')
    {
      MessageOnError();
      return false;
    }
    else
     if(!regexPhone.test(Phone)){
        MessageonPhone();
        return false
     }
     else
      if(!regexEmail.test(Email)){
        MessageOnMail();
        return false;
      }
      togglegenerateUri();
      setTimeout(function() { sendMail(); }, 1000);
      
  }

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if(firstName==='' || lastName==='' || Email==='' || Phone==='' || Company === '')
    {
      MessageOnError();
      return false;
    }
    else
     if(!regexPhone.test(Phone)){
        MessageonPhone();
        return false
     }
     else
      if(!regexEmail.test(Email)){
        MessageOnMail();
        return false;
      }
      toggleGenerate();
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
            onChange={e=> (e.target.value === '' || regexName.test(e.target.value)) ?
             setfirstName(e.target.value) : null}
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
            onChange={e=> (e.target.value === '' || regexName.test(e.target.value)) ?
            setlastName(e.target.value) : null}
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
            onChange={e=> setCompany(e.target.value)}
            variant='outlined'
            id="company"
            value={Company}
            name="company"
            label="Company Name"
            fullWidth
            autoComplete="Company-Name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onChange={e=> setPhone(e.target.value)}
            variant='outlined'
            id="phone"
            value={Phone}
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="Phone-Number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onChange={e=> setEmail(e.target.value)}
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
        {allowDownload > 0 ? 
        <Grid item lg={6} xs={12}>
        <Button
        type="submit"
        variant="contained"
        style={{backgroundColor: ' #3c2344', color: 'white'}}
        endIcon={<SendIcon />}
        >
        Send Enquiry
      </Button>
      </Grid>
      : <Grid item lg={6} xs={12}>
        <Button
        type="submit"
        variant="contained"
        style={{backgroundColor: ' #3c2344', color: 'white'}}
        endIcon={<SendIcon />}
        >
        Send Message
      </Button>
      </Grid>
      }
      {allowDownload > 0 ? 
       <Grid item lg={6} xs={12}>
       <Button
         onClick={handleEnquirySubmit}
         variant="contained"
         style={{backgroundColor: ' #ec1f1f', color: 'white'}}
         endIcon={<GetAppIcon />}
         >
         Download Enquiry
       </Button>
       </Grid> : null 
      }
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
          <iframe title="myFrame" className="sisterMap"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14005.88789852091!2d77.1249931!3d28.6455835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaac431036489e3aa!2sPes%20Stainless%20Equipment!5e0!3m2!1sen!2sin!4v1602935892046!5m2!1sen!2sin" 
       frameBorder="0" allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
        </Grid>
        <Grid item lg={6} sm={12}>
          <h3>E N Project & Engg Industries Private Limited</h3>
          <p>Plot 41, Maruti Industrial Area, Sector 18, Gurugram, Haryana 122008</p>
          <iframe title="myFrame" className="sisterMap"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14026.784911056071!2d77.0636765!3d28.4886936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd644519c47de614!2sE%20N%20Project%20%26%20Engg%20Industries%20Private%20Limited!5e0!3m2!1sen!2sin!4v1602935994608!5m2!1sen!2sin" 
       frameBorder="0" allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
        </Grid>
        {allowDownload > 0 ? 
        <Grid item sm={12} className="enquiry">
          <Generatepdf firstName={firstName} 
          Company={Company} 
          Phone={Phone} 
          Email={Email} 
          lastName={lastName}
          generate={generate}
          generateUri={generateUri}
          makeGeneratableUri={togglegenerateUri}
          makeGeneratable={toggleGenerate}/>
        </Grid> : null 
       }
      </Grid> 
      </div>
    )
}

export default ContactPage