import './affiliate.css'

const AffiliateCard = (props) => {
  const { affiliate } = props

  return (
    <>
      <div className="cardContainer">
        <img variant="bottom" src={affiliate.img} alt="affiliate logo" />
        <div className="cardBody">
          <span>{affiliate.name}</span>
        </div>
      </div>
    </>
  )
}

export default AffiliateCard