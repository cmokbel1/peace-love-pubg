import './gallery.css'
import discord from '../../images/discord-icon.png'

const GalleryCard = (props) => {
  const { tournament } = props

  return (
    <>
      <div className="cardContainerGal">
        <div className="cardBodyGal">
          <h3>{tournament.title}</h3>
          <h4>Organizer: {tournament.hostedBy}</h4>
          <h5>Date: {tournament.dateHosted}</h5>
          <h4>Game: {tournament.game}</h4>
          <h5>Prize: {tournament.prize}</h5>
        </div>
        <button href={tournament.link}>Link</button>
        <a href={tournament.discord}><img src={discord} className="discord" alt="discord icon"/></a>
        <img variant="bottom" src={tournament.img} alt="tournament logo" />
      </div>
      <br />
    </>
  )
}

export default GalleryCard
