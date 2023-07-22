
import './App.css';
import Home from './components/Home';
import Header from './components/header';
import Registration from './components/Registration';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Categoryview from './components/Categoryview';
import BookingHistory from './components/BookingHistory/BookingHistory';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

  const usertype = localStorage.getItem("usertype");
  return (
    <div className='app'>
      
      <BrowserRouter>
      {usertype ==2 ? (
        <Routes>
        
        <Route exact path='/' element={<Home/>}/>
        
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/cart' element ={<Cart/> } />
        <Route exact path='/category/:id' element = {<Categoryview/>} />
        <Route exact path='/history' element = {<BookingHistory/>} />
        
      </Routes> 
      ): (
        <Routes>

        <Route exact path='/register' element={<Registration/>}/>
        <Route exact path='/' element={<Login/>}/> 
        </Routes>
        )
      
     

      }
    

    </BrowserRouter>

      
    </div>
   

  );
}

export default App;
