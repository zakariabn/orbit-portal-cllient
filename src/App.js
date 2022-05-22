import { Route, Routes } from 'react-router-dom';
import './App.css';
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
      </Routes>
    
    </div>
  );
}

export default App;
