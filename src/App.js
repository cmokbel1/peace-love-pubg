import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import tournaments from './Tournaments'
import staffMembers from './StaffMembers'
import smallLogo from './images/companyImages/Asset 2@0.5x.png'
import { Gallery, Home, Staff, About } from './pages'
import { AffiliateCard } from './components'
import affiliates from './affiliates.js'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="menu">
            <div className="logo"><img src={smallLogo} alt="small logo" /></div>
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
          </div>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/gallery' element={<Gallery tournaments={tournaments} />}></Route>
            <Route exact path='/staff' element={< Staff staffMembers={staffMembers} />}></Route>
            <Route exact path='/about' element={< About />}></Route>

          </Routes>
        </div>
      </Router>
      <div className="affiliateContainer">
        <h4>AFFILIATES:</h4>
        <div className='affiliate'>
          {affiliates.map((affiliate, idx) => <AffiliateCard affiliate={affiliate} key={idx} />)}
        </div>
      </div>
    </>
  );
}

export default App;
