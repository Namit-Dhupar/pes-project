import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs, Tab, Box} from '@material-ui/core';
import ProductData from '../data/ProductData.json';

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
          <Box p={3}>
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
      display: 'flex',
      height: 924,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

const ProductList = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const tab = ProductData.map((product,index) => {
      return(
        <Tab key={index} label={product.ProductType} {...a11yProps(index)} />
      )
    });
    const tabPanel = ProductData.map((product,index) => {
      return(
       <TabPanel key={index} value={value} index={index}>
        {product.Subtype.map((el,index) => (
          <div key={el.id} style={{cursor:'pointer'}}>  
          <img src={el.ItemImageA} alt={index}/>
          {(el.ItemImageB) ? <img src={el.ItemImageB} alt={index}/> : null}
          <p>{el.ItemName}</p>
          <br/>
          </div>
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