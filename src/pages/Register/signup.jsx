import React,{useState} from 'react'
import { firebaseConfig } from '../../plugins/firebaseConfig'
import "firebase/auth"
import "firebase/firestore"
import BtnP from '../components/button/button'
import Label from '../components/label/label'
import Input from '../components/input/input'
import '../components/select/select.css'
import '../login/Login.css'
import errorCode from '../login/Firabase_error'
import '../../App.css'

export default () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [post, setPost] = useState('')
    let [errorMsg, setErrorMsg] = useState('')
    const [errorPass, setErrorPass] = useState('')

    const createLogin = (event) => {
      event.preventDefault()
      if (password !== confirmPassword) {
      setErrorPass('Senhas não conferem. Tente novamente!')
      } else {
        firebaseConfig.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
          const userCollection = firebaseConfig.firestore().collection('users')
            firebaseConfig.auth().onAuthStateChanged((user) =>{
              userCollection 
                .doc(user.uid)
                .set({
                  name,
                  post,
                })
            })
        })
        .catch((error) => {
          if (errorCode[error.code]){
            setErrorMsg(errorCode[error.code])
          } else {
            (setErrorMsg('Ocorreu um erro. Tente novamente!'))
          }    
        })
      }
    }
    
    return (
      <div >
      <form  className="form-auth">
        <div>
        <select name='office'className='select' value={post} onChange={e => setPost(e.target.value)}>
            <option className='option' value='Cargo'>Selecione um Cargo</option>
            <option className='option'value='hall'>Garçom/Garçonete</option>
            <option className='option' value='kitchen'>Cozinheiro/Auxiliar de Cozinha</option>
          </select>
        </div>
          <Label class='label'>Nome</Label>       
          <Input className='input' type="text" name="name" value={name} onChange={e => setName(e.target.value)} required />
          <Label className='label'>Email</Label>        
          <Input className='input' type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <Label className='label'>Senha</Label>        
          <Input className='input' type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Label className='label' >Confirme sua senha</Label>
          <Input className='input' type="password" name="confirm-password" value={confirmPassword} 
            onChange={e => setConfirmPassword(e.target.value)} />
          <BtnP className='btnLogCad btn-warning' type="submit" onClick={createLogin}>Cadastrar</BtnP>
      </form>
      <div className='msgError'>
      <p>{errorPass} {errorMsg}</p>
      </div>
    
      
    </div>
    )
  }