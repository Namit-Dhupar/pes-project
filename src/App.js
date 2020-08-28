import React from 'react';
import Navbar from './components/UI/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage, ProductList, ContactPage} from './components';

function App() {
  return (
    <BrowserRouter>
     <Navbar>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" component={ProductList} />
      <Route path="/contact" component={ContactPage} />
     </Navbar> 
    </BrowserRouter>
  );
}

export default App;
