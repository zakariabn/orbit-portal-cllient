import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './components/auth/Login/Login';
import SignUp from './components/auth/SignUp/SignUp';
import Navigation from './components/Header/Navigation/Navigation';
import Home from './components/pages/Home/Home';
import Store from './components/pages/Store/Store';

function App() {
  return (
    <div className="relative flex flex-col items-center">
      <Navigation></Navigation>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/store' element={<Store/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
      </Routes>
    
    <ToastContainer/>
    </div>
  );
}

export default App;
