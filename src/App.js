import './App.css';
import NavBar from './components/navbar/navbar';
import {Routes, Route, useLocation} from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { Home } from './pages/Home/Home';
import { FormasPago } from './pages/FormasPago/FormasPago';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { Register } from './pages/Register/Register';
import { useEffect } from 'react';


function App() {

  let location = useLocation()

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      {
        location.pathname === '/home' || location.pathname === '/contact-us' || location.pathname === '/payment-methods' || location.pathname === '/register'  ? <NavBar /> : <></>
      }

      <Routes>
        <Route exact path='/' element={<LandingPage />} />

        <Route exact path='/home' element={<Home />} />

        <Route exact path='/payment-methods' element={<FormasPago />} />

        <Route exact path='/contact-us' element={<ContactUs />} />

        <Route exact path='/register' element={<Register />} />

        <Route
          path="*"
          element={
            <LandingPage />
          }
        />

      </Routes>
    </>
  );
}

export default App;
