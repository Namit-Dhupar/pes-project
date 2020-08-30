import React,{Fragment} from 'react';
import Navbar from './components/UI/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage, ProductList, ContactPage} from './components';
import ScrollTop from './components/UI/Scrolling/ScrollToTop';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function App(props) {
  return (
    <Fragment>
    <div id="back-to-top-anchor"></div>  
    <BrowserRouter>
     <Navbar>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" component={ProductList} />
      <Route path="/contact" component={ContactPage} />
     </Navbar> 
    </BrowserRouter>
    <ScrollTop {...props}>
    <Fab style={{backgroundColor: "#068DDB", color: "white"}} size="small" aria-label="scroll back to top">
    <KeyboardArrowUpIcon />
    </Fab>
  </ScrollTop> 
  </Fragment>
  );
}

export default App;
