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
        {[numPages].map(page => (
            <Page renderAnnotationLayer={true} height={630} pageNumber={page} />
        ))}  
        
      </Document>
      </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default SpringModal;