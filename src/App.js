import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './images/Asset 5.png'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/staff">Staff</Link>
            </li>
          </ul>
          <Routes>
            {/* <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/gallery' element={< Gallery />}></Route>
              <Route exact path='/about' element={< About />}></Route>
              <Route exact path='/staff' element={< Staff />}></Route> */}
          </Routes>
        </div>
      </Router>
      <img src={logo} className="App-logo" alt="company logo" />
    </>
  );
}

export default App;
