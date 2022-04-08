import logo from '../images/Artboard 1 copy 3@4x.png'
import { AffiliateCard } from '../components'
import affiliates from '../affiliates.js'

const Home = () => {
  return (
    <>
    <img src={logo} className="App-logo" alt="company logo" />
    <br />
    <div className="contentContainer">
      <h1>Affiliates:</h1>
      {affiliates.map((affiliate, idx) => <AffiliateCard affiliate={affiliate} idx={idx} />)}
    </div>
    </>
  )

}

export default Home