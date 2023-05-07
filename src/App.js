import './compo/Navbar'


import Home from './screen/Home';
import './App.css';

import { BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Login from './screen/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screen/Signup';

function App() {
  return (
    
     
      <Router>  
        <Routes>                                
      <Route exact path = '/' element = {<Home/>}/>
      <Route exact path = '/Login' element = {<Login/>} />
      <Route exact path = '/createuser' element = {<Signup/>} />
        </Routes>
     
      
    </Router>
  );
}

export default App;
