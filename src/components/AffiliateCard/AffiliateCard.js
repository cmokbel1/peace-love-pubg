import './affiliate.css'

const AffiliateCard = (props) => {
  const { affiliate } = props

  return (
    <>
    <a href ={affiliate.link}>
      <div className="cardContainerAff">
        <img variant="bottom" src={affiliate.img} alt="affiliate logo" />
        <div className="cardBodyAff">
          <span>{affiliate.name}</span>
        </div>
      </div>
    </a>
    </>
  )
}

export default AffiliateCard