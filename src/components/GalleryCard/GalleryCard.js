const GalleryCard = (props) => {
  const { tournament } = props

  return (
    <>
      <div className="cardContainer">
        <div className="cardBody">
          <h2>Tournament: {tournament.title}</h2>
          <h3>Organizer: {tournament.hostedBy}</h3>
          <h5>Date: {tournament.dateHosted}</h5>
          <h4>Game: {tournament.game}</h4>
          <h5>Prize: {tournament.prize}</h5>
        </div>
        <button variant="primary" href={tournament.link}>Link</button>
        <button variant="primary" href={tournament.discord}>Discord</button>
      </div>
      <img variant="bottom" src={tournament.img} alt="tournament logo" />
      <br />
    </>
  )
}

export default GalleryCard
