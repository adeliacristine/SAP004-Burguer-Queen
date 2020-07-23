import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Inicial from './pages/login/Index';


function App() {
  return (
<div>
  <BrowserRouter>
        <Route path='*' component={Inicial} />
    </BrowserRouter>

  

</div>
  );
}

export default App;






