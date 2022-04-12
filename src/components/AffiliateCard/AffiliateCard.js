import './affiliate.css'

const AffiliateCard = (props) => {
  const { affiliate } = props

  return (
    <>
    <a href ={affiliate.link}>
      <div className="cardContainer">
        <img variant="bottom" src={affiliate.img} alt="affiliate logo" />
        <div className="cardBody">
          <span>{affiliate.name}</span>
        </div>
      </div>
    </a>
    </>
  )
}

export default AffiliateCard