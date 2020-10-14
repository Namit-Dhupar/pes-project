import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Document, pdfjs, Page } from 'react-pdf';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Button }from '@material-ui/core';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '16%',
    width: '70%'
  },
  navigation: {
    position: 'absolute',
    bottom: '1%',
    left: '50%',
    transform: 'translateX(-50%)',
    transition: 'opacity ease-in-out 0.2s',
    boxShadow: '0 30px 40px 0 rgba(16, 36, 94, 0.2)',
    borderRadius: '4px'
  },
  paper: {
    height: '80%'
  }
}));

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
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button variant="contained"
         style={{backgroundColor:"#068DDB", color:"#ffffff"}}
         onClick={handleOpen}>
         Learn More
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
        <div>
        <Document
        file={props.pdf}
        onLoadSuccess={onDocumentLoadSuccess}>
          <div className={classes.paper}>
          <Page scale={0.75} pageNumber={pageNumber} />
         <div className={classes.navigation}> 
         {(pageNumber > 1) ? 
         <Button onClick={()=>setPageNumber(pageNumber-1)} variant="contained"
         style={{backgroundColor:"#068DDB", color:"#ffffff"}}>
         &#60;
        </Button> : null}
        {(pageNumber < numPages) ?
        <Button onClick={()=>setPageNumber(pageNumber+1)} variant="contained"
        style={{backgroundColor:"#068DDB", color:"#ffffff"}}>
          &#62;
       </Button> : null}  
        </div>          
        </div>        
      </Document>
      </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default SpringModal;