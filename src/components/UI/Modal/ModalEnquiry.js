import React, { useState, forwardRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFav } from '../../../store/actions/actions';
import { makeStyles } from '@material-ui/core/styles';
import {Dialog,
        AppBar, 
        Toolbar, 
        IconButton, 
        Typography, 
        Slide,
        Hidden,
        Badge, 
        List, 
        ListItem,
        Divider,
        Button} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'sticky',
      backgroundColor: '#ff2058'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    enquiryButton: {
      color: '#3c2344',
      marginLeft: 'auto'
    }
  }));
  
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  const ModalEnquiry = ({parentCallback}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [badgeLength, setbadgeLength] = useState(0)
    const enquiredProducts = useSelector(state => state.enquiry.products);
    const dispatch = useDispatch();
  
    const handleClickOpen = () => {
      setOpen(true);
    };

   const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
      const badgeLength = [].concat.apply([], enquiredProducts.map((el) =>el.Subtype.filter(p => p.isEnquired === true)));
      setbadgeLength(badgeLength.length);
    }, [enquiredProducts])


   const enquiredList = enquiredProducts.map((el) => {
      return(
      el.Subtype.filter(prod => prod.isEnquired === true).map((pes,index) => (
        <List key={index}>     
      <ListItem>
      <img src={pes.ItemImageA} alt={index}/>
        <Hidden smDown>
            {(pes.ItemImageB) ? <img src={pes.ItemImageB} alt={index}/> : null}
        </Hidden>    
            <p style={{marginLeft: '12px'}}><strong>{pes.ItemName}</strong></p>
        <Button variant="outlined"
         className={classes.enquiryButton}
         onClick={()=>{dispatch(toggleFav(pes.id))}}>
         Remove from Enquiry
        </Button>
      </ListItem>
      <Divider />
      </List>
      ))
      )
    })
  
    return (
      <div>
        <IconButton color="inherit" onClick={handleClickOpen}>
          <Badge badgeContent={badgeLength} color="secondary">
            <ShoppingCartIcon/>
          </Badge>
        </IconButton>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                My Enquiry List
              </Typography>
            </Toolbar>
          </AppBar>
          {enquiredList}
        </Dialog>
      </div>
    );
  }

  export default ModalEnquiry
  