import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Routes,Route} from 'react-router-dom';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';



function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/'  element={<Home/> }  />
          <Route path='/About'  element={<About/> }  />
          <Route path='/Contact'  element={<Contact/> }  />
          </Routes>
    </div>
  );
}

export default App;
