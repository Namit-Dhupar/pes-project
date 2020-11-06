import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { toggleFav } from '../../../store/actions/actions';
import PropTypes from 'prop-types';
import { Document, pdfjs, Page } from 'react-pdf';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Button }from '@material-ui/core';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const SpringModal = (props) => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    navigation: {
      position: 'absolute',
      bottom: '5%',
      left: '50%',
      transform: 'translateX(-50%)',
      transition: 'opacity ease-in-out 0.2s',
      boxShadow: '0 30px 40px 0 rgba(16, 36, 94, 0.2)',
      borderRadius: '4px'
    },
    enquiryButton: {
      color: (props.isEnq) ? '#ffffff' : '#3c2344',
      marginTop: '20px',
      backgroundColor: (props.isEnq) ? '#ec1f1f' : '#ffffff',
      '&:hover': {
        backgroundColor: (props.isEnq) ? '#ec1f1f' : '#ffffff',
      },
    }
  }));
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleEnquiry = () => {
    dispatch(toggleFav(props.id));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button variant="outlined"
         style={{backgroundColor:"#3c2344", color:"#ffffff"}}
         onClick={handleOpen}>
         Learn More
        </Button>
        <Button variant="outlined"
          className={classes.enquiryButton}
          onClick={handleEnquiry}>
         {(props.isEnq) ? 'Added To Enquiry' : 'Add To Enquiry' }
         </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Document
        file={props.pdf}
        onLoadSuccess={onDocumentLoadSuccess}>
          <Button variant="contained" size="small"
         style={{backgroundColor:"#3c2344", color:"#ffffff"}}
         onClick={handleClose}>X</Button>
          <Page height={590} pageNumber={pageNumber} /> 
         <div className={classes.navigation}> 
         {(pageNumber > 1) ? 
         <Button onClick={()=>setPageNumber(pageNumber-1)} variant="contained"
         style={{backgroundColor:"#3c2344", color:"#ffffff"}}>
         &#60;
        </Button> : null}
        {(pageNumber < numPages) ?
        <Button onClick={()=>setPageNumber(pageNumber+1)} variant="contained"
        style={{backgroundColor:"#3c2344", color:"#ffffff"}}>
          &#62;
       </Button> : null}  
        </div>               
      </Document>
        </Fade>
      </Modal>
    </div>
  );
}

export default SpringModal;