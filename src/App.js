import React,{useState, useEffect} from 'react';
import './App.css';
import "firebase/firestore";
import 'firebase/auth'
import {firebaseConfig} from './plugins/firebaseConfig'
import { BrowserRouter, Route, Redirect ,Switch} from 'react-router-dom';
import Kitchen from '../src/pages/Kitchen'
import Hall from './pages/hall/Hall';
import Login from '../src/pages/login/Login'
import Singup from '../src/pages/Register/signup'



const App =()=> {
  const [userPage, setUserPage] = useState();


  const checkPlace = (user) =>{
const userCollection =firebaseConfig.firestore().collection('users').doc(user.uid);
userCollection.get().then((staff) => {
  console.log(user.uid)
  if (staff.data().post === 'kitchen'){
    setUserPage(()=>
     <BrowserRouter>
    <Redirect to='kitchen '/>
    <Switch>
    <Route path='/kitchen' component={Kitchen}/>
    
    </Switch>
    </BrowserRouter>)
  }else if (staff.data().post ==='hall'){
    setUserPage(()=><BrowserRouter>
    <Redirect to='/hall'/>
    <Switch>
    <Route path='/hall' component={Hall}/>
    
    </Switch>
    </BrowserRouter>)
  }else {
    console.log('deu ruim')
   /* setUserPage(()=><Route path='/error' component={404}/>)*/
  }
});
}
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      if (user) {
        checkPlace(user)

      } else {
        console.log(window.location.pathname)
        setUserPage(() => <BrowserRouter>
        <Redirect to={window.location.pathname ==='/singup'?'/singup': '/'}/>
          <Switch>
            <Route path='/' exact={true} component={Login} />
            <Route path='/singup' component={Singup}/>
           {/* <Route path='*' component={Page404} />*/}
          </Switch>
        </BrowserRouter>)
      }
    });

  }, [])


 
  return (
   
<div className='container-fluid p-0' >

{userPage}
  

</div>
  );
  }
export default App;
