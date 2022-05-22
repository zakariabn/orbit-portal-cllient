import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Header/Navigation/Navigation';
import Home from './components/pages/Home/Home';
import Shop from './components/pages/Shop/Shop';

function App() {
  return (
    <div className="relative flex flex-col items-center">
      <Navigation></Navigation>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Shop/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
