import React from 'react'
//import BtnP from '../components/button/button'
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom'
import Hall from '../../pages/hall/Hall'

const Sucess = () =>{


return(
	<div>
		<h2>Você se cadastou com sucesso.</h2>
		<BrowserRouter> 
        <Link className='link' to="hall" title='hall'>Entrar</Link>
       
    <Switch>
      <Route path='/hall'>
      <Hall />
        </Route> 
    </Switch>
      </BrowserRouter>

	</div>

)
}
export default Sucess