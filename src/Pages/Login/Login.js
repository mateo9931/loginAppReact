import React from 'react';
import {ReactComponent as Logo} from '../../assets/user.svg'
import './login.css';


class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='div-login'>
                <div className='div-login-logo'>
                    <Logo/>
                </div>
                <div>
                    <form >
                        <label>Ingresa tu email</label><input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        <br />
                        <br />
                        <label>Ingresa tu Contraseña</label><input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <br />
                        <br />
                        <button >Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;