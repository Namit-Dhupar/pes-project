import React, { useState, forwardRef, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
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
        Button, Grid} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import CancelIcon from '@material-ui/icons/Cancel';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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
    },
    checkoutButton: {
      backgroundColor:"#ec1f1f",
      color:"#ffffff",
      '&:hover': {
        backgroundColor: '#ec1f1f'
      },
    },
    checkoutLink: {
      margin: "0 3% 3% auto", 
      textDecoration: "none"
    }
  }));
  
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  const ModalEnquiry = () => {
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
      <Grid container>
          <Grid item xs={4}> 
          <p style={{marginLeft: '12px'}}><strong>{pes.ItemName}</strong></p>   
         <img src={pes.ItemImageA} alt={index}/>
        <Hidden smDown>
            {(pes.ItemImageB) ? <img src={pes.ItemImageB} alt={index}/> : null}
        </Hidden>    
            </Grid>
            <Grid item xs={4}>
            {pes.SelectedHP ? 
            <p style={{marginLeft: '24px'}}><strong><span style={{color: '#ec1f1f'}}>HP/kW:</span> {pes.SelectedHP}</strong></p>
            : pes.SelectedSize ? 
            <p style={{marginLeft: '24px'}}><strong><span style={{color: '#ec1f1f'}}>SIZE(MM):</span> {pes.SelectedSize}</strong></p>
            : pes.SelectedFlowRate ?
            <p style={{marginLeft: '24px'}}><strong><span style={{color: '#ec1f1f'}}>FLOW RATE(KL):</span> {pes.SelectedFlowRate}</strong></p>
            : null
            }
            </Grid>
            <Grid item xs={4}>
            { pes.SelectedMOC ?  
            <p style={{marginLeft: '12px'}}><strong><span style={{color: '#ec1f1f'}}>MOC:</span> {pes.SelectedMOC}</strong></p>
            : null}
            </Grid>
            <Grid item xs={4}>
            { pes.SelectedFitting ?  
            <p style={{marginLeft: '12px'}}><strong><span style={{color: '#ec1f1f'}}>FITITING TYPE:</span> {pes.SelectedFitting}</strong></p>
            : pes.SelectedUnion ?  
             <p style={{marginLeft: '12px'}}><strong><span style={{color: '#ec1f1f'}}>UNION TYPE:</span> {pes.SelectedUnion}</strong></p>
            : pes.SelectedPurpose ?  
            <p style={{marginLeft: '12px'}}><strong><span style={{color: '#ec1f1f'}}>APPLICATION:</span> {pes.SelectedPurpose}</strong></p>
            : null}
            </Grid>
            <Grid item xs={12}>
            { pes.ItemMessage ?  
            <p style={{marginLeft: '12px'}}><strong><span style={{color: '#ec1f1f'}}>OTHER DETAILS:</span> {pes.ItemMessage}</strong></p>
            : null} 
            </Grid>
            </Grid>
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
          {(badgeLength > 0) ? enquiredList : 
          <Fragment>
          <img className={classes.emptyCart} src="/Images/Empty_Cart.png" alt="Empty Cart" />
          <div style={{textAlign: "center"}}>
           <h2>YOUR ENQUIRY LIST IS EMPTY</h2>
           <h4 style={{color: "#9a9a9a"}}>Please Go to our Products page to find lots of interesting items</h4>
           </div>
           </Fragment>
          }
          {(badgeLength > 0) ?
          <Link to="/contact" className={classes.checkoutLink}>
          <Button variant="contained"
          className={classes.checkoutButton}
          onClick={handleClose}
          endIcon={<AddShoppingCartIcon />}>
           Checkout
          </Button>
          </Link> : null}
        </Dialog>
      </div>
    );
  }

  export default ModalEnquiry
  