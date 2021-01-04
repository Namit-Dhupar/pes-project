import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedhp, selectedsize, selectedmoc, selectedtext, 
selectedflowrate, selectedfitting, selectedunion, selectedpurpose } from '../store/actions/actions';
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
    const dispatch = useDispatch();
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
      {
        el.ItemPurpose
         ?
         <div>
         <FormLabel>Application</FormLabel>
         <RadioGroup row aria-label="position3" name="position3" value={el.SelectedPurpose} 
         onChange={e => dispatch(selectedpurpose(el.id, e.target.value))} defaultValue="top3">
         {el.ItemPurpose.map((PP,i)=>(      
           <FormControlLabel
             key={i}
             value={PP}
             control={<Radio color="secondary" />}
             label={PP}
             labelPlacement="start"
           />
           ))} 
           </RadioGroup> 
           </div> : null
      }
      {el.ItemHPKW ? 
      <div>
      <FormLabel>HP/kW:</FormLabel>
      <RadioGroup row aria-label="position" value={el.SelectedHP} name="position"
      onChange={e => dispatch(selectedhp(el.id, e.target.value))}
      defaultValue="top"> 
      {el.ItemHPKW.map((Hp,i)=>(
      <FormControlLabel
      key={i}
      value={Hp}
      control={<Radio color="primary"/>}
      label={Hp}
      labelPlacement="start"
    />      
      ))} 
      </RadioGroup>     
      </div>
      : 
      el.ItemSize ?
      <div>
      <FormLabel>Size(mm)</FormLabel>
      <RadioGroup row aria-label="position" name="position" value={el.SelectedSize}
      onChange={e => dispatch(selectedsize(el.id, e.target.value))} defaultValue="top"> 
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
      : 
      el.ItemFlowRate ?
        <div>
      <FormLabel>Flow Rate(KL)</FormLabel>
      <RadioGroup row aria-label="position2" name="position2" value={el.SelectedFlowRate} 
      onChange={e => dispatch(selectedflowrate(el.id, e.target.value))} defaultValue="top2">
      {el.ItemFlowRate.map((FR,i)=>(      
        <FormControlLabel
          key={i}
          value={FR}
          control={<Radio color="primary" />}
          label={FR}
          labelPlacement="start"
        />
        ))} 
        </RadioGroup> 
        </div>
        : null
      }
      {el.ItemMOC ? 
      <div>
      <FormLabel>MOC</FormLabel>
      <RadioGroup row aria-label="position2" name="position2" value={el.SelectedMOC} 
      onChange={e => dispatch(selectedmoc(el.id, e.target.value))} defaultValue="top2">
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
        </div>
      : 
      null
      }
      {el.FittingType ? 
      <div>
      <FormLabel>Fitting Type</FormLabel>
      <RadioGroup row aria-label="position3" name="position3" value={el.SelectedFitting} 
      onChange={e => dispatch(selectedfitting(el.id, e.target.value))} defaultValue="top3">
      {el.FittingType.map((FT,i)=>(      
        <FormControlLabel
          key={i}
          value={FT}
          control={<Radio color="secondary" />}
          label={FT}
          labelPlacement="start"
        />
        ))} 
        </RadioGroup> 
        </div>
      : 
      el.UnionType
      ?
      <div>
      <FormLabel>Union Type</FormLabel>
      <RadioGroup row aria-label="position3" name="position3" value={el.SelectedUnion} 
      onChange={e => dispatch(selectedunion(el.id, e.target.value))} defaultValue="top3">
      {el.UnionType.map((UT,i)=>(      
        <FormControlLabel
          key={i}
          value={UT}
          control={<Radio color="secondary" />}
          label={UT}
          labelPlacement="start"
        />
        ))} 
        </RadioGroup> 
        </div>
      :  null
      }
      <FormLabel>{(el.SelectedSize === "Custom Size" || el.SelectedFlowRate === "Custom Flow Rate"
      || el.SelectedPurpose === "Other Purpose") ? 
      <span>Other Details & Your Custom Info</span>
      : <span>Other Details</span>}</FormLabel>
        <TextField
          required
          fullWidth
          onChange={function(e){
            e.preventDefault();
            dispatch(selectedtext(el.id, e.target.value));
          }}
          value={el.ItemMessage}
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
          {el.isEnquired ?
      <FormControl style={{marginTop: "10px"}} component="fieldset">
        {
        el.ItemPurpose
         ?
         <div>
         <FormLabel>Application</FormLabel>
         <RadioGroup row aria-label="position3" name="position3" value={el.SelectedPurpose} 
         onChange={e => dispatch(selectedpurpose(el.id, e.target.value))} defaultValue="top3">
         {el.ItemPurpose.map((PP,i)=>(      
           <FormControlLabel
             key={i}
             value={PP}
             control={<Radio color="secondary" />}
             label={PP}
             labelPlacement="start"
           />
           ))} 
           </RadioGroup> 
           </div> : null
      }
      {el.ItemHPKW ? 
      <div>
      <FormLabel>HP/kW:</FormLabel>
      <RadioGroup row aria-label="position" value={el.SelectedHP} name="position"
      onChange={e => dispatch(selectedhp(el.id, e.target.value))}
      defaultValue="top"> 
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
      el.ItemSize ?
      <div>
      <FormLabel>Size(mm)</FormLabel>
      <RadioGroup row aria-label="position" name="position" value={el.SelectedSize}
      onChange={e => dispatch(selectedsize(el.id, e.target.value))} defaultValue="top"> 
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
      :  el.ItemFlowRate ?
      <div>
    <FormLabel>Flow Rate(KL)</FormLabel>
    <RadioGroup row aria-label="position2" name="position2" value={el.SelectedFlowRate} 
    onChange={e => dispatch(selectedflowrate(el.id, e.target.value))} defaultValue="top2">
    {el.ItemFlowRate.map((FR,i)=>(      
      <FormControlLabel
        key={i}
        value={FR}
        control={<Radio color="secondary" />}
        label={FR}
        labelPlacement="start"
      />
      ))} 
      </RadioGroup> 
      </div>
      : null
      }
       {el.ItemMOC ? 
      <div>
      <FormLabel>MOC</FormLabel>
      <RadioGroup row aria-label="position2" name="position2" value={el.SelectedMOC} 
      onChange={e => dispatch(selectedmoc(el.id, e.target.value))} defaultValue="top2">
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
        </div>
      : 
      null
      }
      {el.FittingType ? 
      <div>
      <FormLabel>Fitting Type</FormLabel>
      <RadioGroup row aria-label="position3" name="position3" value={el.SelectedFitting} 
      onChange={e => dispatch(selectedfitting(el.id, e.target.value))} defaultValue="top3">
      {el.FittingType.map((FT,i)=>(      
        <FormControlLabel
          key={i}
          value={FT}
          control={<Radio color="secondary" />}
          label={FT}
          labelPlacement="start"
        />
        ))} 
        </RadioGroup> 
        </div>
      : 
      el.UnionType
      ?
      <div>
      <FormLabel>Union Type</FormLabel>
      <RadioGroup row aria-label="position3" name="position3" value={el.SelectedUnion} 
      onChange={e => dispatch(selectedunion(el.id, e.target.value))} defaultValue="top3">
      {el.UnionType.map((UT,i)=>(      
        <FormControlLabel
          key={i}
          value={UT}
          control={<Radio color="secondary" />}
          label={UT}
          labelPlacement="start"
        />
        ))} 
        </RadioGroup> 
        </div>
      : null
      }
      <FormLabel>{(el.SelectedSize === "Custom Size" || el.SelectedFlowRate === "Custom Flow Rate"
      || el.SelectedPurpose === "Other Purpose") ? 
      <span>Other Details & Your Custom Size</span>
      : <span>Other Details</span>}</FormLabel>
        <TextField
          required
          fullWidth
          onChange={function(e){
            e.preventDefault();
            dispatch(selectedtext(el.id, e.target.value));
          }}
          value={el.ItemMessage}
          multiline
          rows={3}
          variant="outlined"
        />
       </FormControl>
       : null
      }
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