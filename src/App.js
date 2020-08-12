import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Kitchen from './pages/kitchen/Kitchen';
import Hall from './pages/hall/Hall';
import NotFound from '../src/404/404';
import Signup from '../src/pages/Register/signup';
import MenuLogCad from '../src/pages/login/menuLogCad';
import {firebaseConfig} from './plugins/firebaseConfig';
import 'firebase/auth';
import "firebase/firestore";
import './App.css';

const App = () => {
    const [userPage, setUserPage] = useState();

    const checkPlace = (user) => {
      const userCollection = firebaseConfig.firestore().collection('users').doc(user.uid);
        userCollection.get()
          .then((staff) => {
            if (staff.data().post === 'kitchen') {
                setUserPage(() => 
                  <BrowserRouter>
                    <Redirect to='kitchen'/>
                    <Switch>
                        <Route path='/kitchen'
                          component={Kitchen}/>
                    </Switch>
                  </BrowserRouter>)
            } else if (staff.data().post === 'hall') {
                setUserPage(() => 
                  <BrowserRouter>
                    <Redirect to='/hall'/>
                    <Switch>
                        <Route path='/hall'
                          component={Hall}/>
                    </Switch>
                  </BrowserRouter>)
            } else {
                setUserPage(() =>
                  <Route path = '/error' 
                    component = {NotFound} />)
            }
        });
    }

    useEffect(() => {
        firebaseConfig.auth().onAuthStateChanged((user) => {
            if (user) {
                checkPlace(user)
            } else {
                setUserPage(() => 
                  <BrowserRouter>
                    <Redirect to={
                        window.location.pathname === '/signup' ? '/signup' : '/' }/>
                    <Switch>
                        <Route path='/' exact={true}
                          component={MenuLogCad}/>
                        <Route path='/signup'
                          component={Signup}/>
                        <Route path='*'
                          component={NotFound}/>
                    </Switch>
                  </BrowserRouter>)
            }
        });
    }, [])

    return (
        <div className='container-fluid p-0'>
          {userPage} </div>
    );
}

export default App;
