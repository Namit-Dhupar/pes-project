import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleFav } from '../../../store/actions/actions';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Dialog, AppBar, Toolbar, IconButton, Typography, Slide, Box} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import { Document, pdfjs, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'sticky',
      backgroundColor: '#3c2344'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    enquiryButton: {
      color: (props.isEnq) ? '#ffffff' : '#3c2344',
      marginLeft: '20px',
      backgroundColor: (props.isEnq) ? '#ec1f1f' : '#ffffff',
      '&:hover': {
        backgroundColor: (props.isEnq) ? '#ec1f1f' : '#ffffff',
      },
    }
  }));

  const classes = useStyles();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleEnquiry = () => {
    dispatch(toggleFav(props.id));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained"
         style={{backgroundColor:"#3c2344", color:"#ffffff"}}
         onClick={handleClickOpen}>
         Learn More
        </Button>
        <Button variant="outlined"
          className={classes.enquiryButton}
          onClick={handleEnquiry}>
         {(props.isEnq) ? 'Added To Enquiry' : 'Add To Enquiry' }
         </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
        <Typography variant="h6" className={classes.title}>
          {props.title}
        </Typography>
        {(pageNumber > 1) ? 
         <Button
         onClick={()=>setPageNumber(pageNumber-1)} variant="contained"
         style={{backgroundColor:"#3c2344", color:"#ffffff"}}>
         &#60;
        </Button> : null}
            <Typography variant="h6">
              Page {pageNumber} of {numPages}
            </Typography>
        {(pageNumber < numPages) ?
        <Button
         onClick={()=>setPageNumber(pageNumber+1)} variant="contained"
         style={{backgroundColor:"#3c2344", color:"#ffffff"}}>
          &#62;
       </Button> : null}    
          </Toolbar>
        </AppBar>
        <Box display="flex" justifyContent="center">
        <Document
        file={props.pdf}
        onLoadSuccess={onDocumentLoadSuccess}>
          <Page scale={1.75} pageNumber={pageNumber} /> 
          </Document>
          </Box>      
      </Dialog>
    </div>
  );
}