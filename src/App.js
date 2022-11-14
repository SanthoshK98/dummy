import logo from './logo.svg';

import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {Routes,Route} from 'react-router-dom';
import Cart from './Components/Cart';
import Orders from './Components/Orders';
import Logout from './Components/Logout';
import Home from './Components/Home';
import PrivateComponent from './Components/PrivateComponent';
import Singleproduct from './Components/Singleproduct';
import Form from './Components/Form';
import Basic from './Components/Basic';

import Lootstrap from './Components/Lootstarp';



function App() {

  
 
  
  
  
  



  return (
    <div className="App">
     <h1>Ecommerce Page</h1>
     
     <Header/>
    
     <Routes>

      <Route element ={<PrivateComponent/>}>
<Route path='/' element={<Home/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
<Route path='/orders' element={<Orders/>}></Route>
<Route path='/singleproduct/:id' element={<Singleproduct/>}></Route>

<Route path='/logout' element={<Logout/>}></Route>
</Route>

<Route path='/signup' element={<Signup/>}></Route>
<Route path='/login' element={<Login/>}></Route>

     </Routes>
    
    </div>
  );
}

export default App;
