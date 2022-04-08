const AffiliateCard = (props) => {
  const { affiliate } = props

  return (
    <>
      <div className="cardContainer">
        <img variant="bottom" src={affiliate.img} alt="affiliate logo" />
        <div className="cardBody">
          <h2>{affiliate.name}</h2>
        </div>
      </div>
      <br />
    </>
  )
}

export default AffiliateCard