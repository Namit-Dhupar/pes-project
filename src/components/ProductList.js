import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Showpdffull from './UI/Modal/ModalFull';
import Showpdfphone from './UI/Modal/ModalMobile';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs, 
        Tab, 
        Box, 
        List, 
        ListItem, 
        Divider,
        Grid,
        Hidden} from '@material-ui/core';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
     
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={0}>
          {children}
          </Box>
        )}
      </div>
    );
  }
   
  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex'
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`
    },
    list: {
      width: '100%'
    }
  }));

const ProductList = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const productState = useSelector(state => state.enquiry.products)

const tab = productState.map((product,index) => {
      return(
        <Tab key={index} label={product.ProductType} {...a11yProps(index)} />
      )
    });
const tabPanel = productState.map((product,index) => {
      return(
       <TabPanel className={classes.list} key={index} value={value} index={index}>
        {product.Subtype.map((el,index) => (
          <List key={index}>
          <ListItem>
          <div key={el.id}>
        <Grid container>
          <Grid item lg={3}>     
        <img src={el.ItemImageA} alt={index}/>
        <Hidden smDown>
            {(el.ItemImageB) ? <img src={el.ItemImageB} alt={index}/> : null}
        </Hidden>    
            <p><strong>{el.ItemName}</strong></p>
         </Grid>         
         <Grid item lg={9}>
          <Hidden smDown>
          <Showpdffull title={el.ItemName} 
          pdf={el.ItemFile} isEnq={el.isEnquired} id={el.id} /> 
         <p>{el.ItemDescription}{' '}</p>   
         </Hidden>
         <Hidden mdUp>
         <Showpdfphone 
          pdf={el.ItemFile}/> 
          </Hidden>
         </Grid>
        </Grid>         
          </div>
          </ListItem>
          <Divider />
         </List>
        ))}
      </TabPanel>
      )
    });

      return (
        <div className={classes.root}>
          <Tabs
            indicatorColor="primary"
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
          {tab}
          </Tabs>
          {tabPanel}
        </div>
      );
}

export default ProductList