import React from 'react';
import './App.css';
//import { BrowserRouter, Route } from 'react-router-dom';

import Hall from './pages/hall/Hall';
//import Inicial from '../src/Route/Index';
//import  'bootstrap / dist / css / bootstrap.min.css' ;


function App() {
  return (

<div className='container-fluid p-0' >
{/*
  <BrowserRouter>
        <Route path='*' component={Inicial} />
    </BrowserRouter>*/}
 <Hall/>
  

</div>
  );
}
export default App;
