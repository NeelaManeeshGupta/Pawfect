
import './App.css';
import Login from './Login'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import PetCare from './PetCare'
import Products from './Products'
import Signup from './Signup'
import PetDiet from './PetDiet'
import Consultation from './Consultation'
import Booking from './Booking'
import Message from './Message'
import Profile from './Profile'
import Payment from './Payment'
import PaymentSuccess from './PaymentSuccess'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MyForm from './MyForm';
import Orders from './Orders';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signUp' element={<Signup />}/>
          <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/pet-care' element={<PetCare/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/petdiet' element={<PetDiet/>}/>
        <Route path='/consultation' element={<Consultation/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/MyForm' element={<MyForm/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/PaymentSuccess' element={<PaymentSuccess/>}/>
        <Route path='/orders' element={<Orders/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
