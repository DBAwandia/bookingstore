import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import List from './pages/List';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/hotels' element={<List />} />
          <Route path='/hotels/:id' element={<Hotel/>} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
         

        </Routes>
      </Router>
    </div>
  );
}

export default App;
