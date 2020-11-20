import React,{Fragment} from 'react';
import Navbar from './components/UI/Navbar/Navbar';
import ScrollIntoView from './components/UI/Scrolling/ScrollIntoView';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage, ProductList, ContactPage, AboutUs, Capabilities, Projects, Services} from './components';
import ScrollTop from './components/UI/Scrolling/ScrollToTop';
import Footer from './components/UI/Footer/Footer';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function App(props) {
  return (
    <Fragment>
    <div id="back-to-top-anchor"></div>  
    <BrowserRouter>
    <div>
      <ScrollIntoView>
     <Navbar>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" component={ProductList} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/company/about" component={AboutUs} />
      <Route path="/company/capabilities" component={Capabilities} />
      <Route path="/projects" component={Projects} />
      <Route path="/services" component={Services} />
     </Navbar>
     </ScrollIntoView>
     </div>
    </BrowserRouter>
    <ScrollTop {...props}>
    <Fab style={{backgroundColor: "#ec1f1f", color: "white"}} size="small" aria-label="scroll back to top">
    <KeyboardArrowUpIcon />
    </Fab>
  </ScrollTop>
  <Footer /> 
  </Fragment>
  );
}

export default App;
