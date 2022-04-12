import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import tournaments from './Tournaments'
import staffMembers from './StaffMembers'
import { Gallery, Home, Staff, About } from './pages'
import './App.css';

function App() {
  return (
    <>
      <Router>
          <div className="App">
            <div className="logo">PLP</div>
            <nav>
              <ul className="App-header">
                <li key='home'>
                  <Link to="/">Home</Link>
                </li>
                <li key='gallery'>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li key='staff'>
                  <Link to="/staff">Staff</Link>
                </li>
                <li key='about'>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/gallery' element={<Gallery tournaments={tournaments} />}></Route>
              <Route exact path='/staff' element={< Staff staffMembers={staffMembers} />}></Route>
              <Route exact path='/about' element={< About />}></Route>

            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
