import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './componentes/Register/Index';
//import Login from './componentes/Login';
import Login from './pages/login/Login.jsx'


function App() {
  return (
<div>
    <BrowserRouter>
   {/*     <Route path='/login' component={Register} />*/}
        <Route path='*'   component={Register} />
    </BrowserRouter>
    <div>
        <Login></Login>
    </div>
</div>
  );
}

export default App;






