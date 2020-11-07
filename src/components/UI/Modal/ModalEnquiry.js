import React, { useState, forwardRef, useEffect, Fragment } from 'react';
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
        Divider} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import CancelIcon from '@material-ui/icons/Cancel';
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
      color: '#ec1f1f',
      marginLeft: 'auto'
    },
    emptyCart: {
      width: "30%",
      height: "20%",
      [theme.breakpoints.up('sm')]: {
        height: '35%',
      },
      marginLeft: "35%", 
      marginTop: "10%"
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
        <CancelIcon onClick={()=>{dispatch(toggleFav(pes.id))}} className={classes.enquiryButton} />
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
          {([].concat.apply([],enquiredList).length > 0) ? enquiredList : 
          <Fragment>
          <img className={classes.emptyCart} src="/Images/Empty_Cart.png" alt="Empty Cart" />
          <div style={{textAlign: "center"}}>
           <h2>YOUR ENQUIRY LIST IS EMPTY</h2>
           <h4 style={{color: "#9a9a9a"}}>Please Go to our Products page to find lots of interesting items</h4>
           </div>
           </Fragment>
          }
        </Dialog>
      </div>
    );
  }

  export default ModalEnquiry
  