import logo from '../images/Artboard 1 copy 3@4x.png'
import { AffiliateCard } from '../components'
import affiliates from '../affiliates.js'

const Home = () => {
  return (
    <>
      <div className="contentContainer">
        <img src={logo} className="App-logo" alt="company logo" />
      </div>
      <div className="affiliateContainer">
        <h1>Affiliates:</h1>
        {affiliates.map((affiliate, idx) => <AffiliateCard affiliate={affiliate} key={idx} />)}
      </div>
    </>
  )

}

export default Home