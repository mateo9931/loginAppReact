import React from 'react';
import {Route} from 'react-router-dom'
import Login from './Pages/Login/Login';


class App extends React.Component{
  
  render(){
    return(
      <div>    
      <Route exact path='/' render={() => <Login/>}/>
      </div>
    )
  }
}
export default App;