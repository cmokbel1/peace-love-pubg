import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import tournaments from './Tournaments'
import staffMembers from './StaffMembers'
import smallLogo from './images/companyImages/Asset 2@0.5x.png'
import { Gallery, Home, Staff, About } from './pages'
import { AffiliateCard } from './components'
import affiliates from './affiliates.js'
import './App.css';

function App() {
  //  building active link functionality
  const clickChange = (event) => {
    let active = document.querySelector('.active')
    active.classList.remove('active')
    event.target.classList.add('active')
  }

  
  return (
    <>
      <Router>
        <div className="document">
          <div className="menu">
            <nav>
              <a className="logo" href='/'><img src={smallLogo} alt="small logo" /></a>
               <Link to="/" className="active">Home</Link>
                <Link to="/gallery">Gallery</Link>
                 <Link to="/staff">Staff</Link>
                 <Link to="/about">About Us</Link>
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
