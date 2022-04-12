import './gallery.css'

const GalleryCard = (props) => {
  const { tournament } = props

  return (
    <>
      <div className="cardContainerGal">
        <div className="cardBodyGal">
          <h2>{tournament.title}</h2>
          <h3>Organizer: {tournament.hostedBy}</h3>
          <h5>Date: {tournament.dateHosted}</h5>
          <h4>Game: {tournament.game}</h4>
          <h5>Prize: {tournament.prize}</h5>
        </div>
        <button variant="primary" href={tournament.link}>Link</button>
        <button variant="primary" href={tournament.discord}>Discord</button>
        <img variant="bottom" src={tournament.img} alt="tournament logo" />
      </div>
      <br />
    </>
  )
}

export default GalleryCard
