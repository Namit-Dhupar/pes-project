import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Showpdffull from './UI/Modal/ModalFull';
import Showpdfphone from './UI/Modal/ModalMobile';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs, TextField,
        Tab, 
        Box, 
        List, 
        ListItem, 
        Divider,
        Grid,
        Hidden, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@material-ui/core';

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
    const [radioValueHP, setradioValueHP] = useState('');
    const [radioValueSize, setradioValueSize] = useState('');
    const [radioValueMOC, setradioValueMOC] = useState('');
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
          <p><strong>{el.ItemName}</strong></p>
        <Grid container>
          <Grid item lg={3}>     
        <img src={el.ItemImageA} alt={index}/>
        <Hidden smDown>
            {(el.ItemImageB) ? <img src={el.ItemImageB} alt={index}/> : null}
        </Hidden>    
         </Grid>         
         <Grid item lg={9}>
          <Hidden smDown>
          <Showpdffull title={el.ItemName} 
          pdf={el.ItemFile} isEnq={el.isEnquired} id={el.id} /> 
          {el.isEnquired ?
      <FormControl style={{marginTop: "10px"}} component="fieldset">
      {el.ItemHPKW ? 
      <div>
      <FormLabel>Hp/Kw</FormLabel>
      <RadioGroup row aria-label="position" value={radioValueHP} name="position"
      onChange={e => setradioValueHP(e.target.value)} defaultValue="top"> 
      {el.ItemHPKW.map((Hp,i)=>(
      <FormControlLabel
      key={i}
      value={Hp}
      control={<Radio color="primary" />}
      label={Hp}
      labelPlacement="start"
    />      
      ))} 
      </RadioGroup>     
      </div>
      :
      <div>
      <FormLabel>Size(mm)</FormLabel>
      <RadioGroup row aria-label="position" value={radioValueSize} name="position"
      onChange={e => setradioValueSize(e.target.value)} defaultValue="top"> 
      {el.ItemSize.map((Size,i)=>(
      <FormControlLabel
      key={i}
      value={Size}
      control={<Radio color="primary" />}
      label={Size}
      labelPlacement="start"
    />      
      ))} 
      </RadioGroup>
      </div>
      }
        <FormLabel>MOC</FormLabel>
      <RadioGroup row aria-label="position2" name="position2" value={radioValueMOC}
      onChange={e => e.target.value(setradioValueMOC)} defaultValue="top2">
      {el.ItemMOC.map((MOC,i)=>(      
        <FormControlLabel
          key={i}
          value={MOC}
          control={<Radio color="secondary" />}
          label={MOC}
          labelPlacement="start"
        />
        ))} 
        </RadioGroup>
        <FormLabel>Other Details</FormLabel>
        <TextField
          required
          fullWidth
          value={el.ItemMessage}
          name="Text"
          multiline
          rows={3}
          variant="outlined"
        />
       </FormControl>
       : null
      }
       
         <p>{el.ItemDescription}{' '}</p>   
         </Hidden>
         <Hidden mdUp>
         <Showpdfphone 
          pdf={el.ItemFile} isEnq={el.isEnquired} id={el.id}/> 
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