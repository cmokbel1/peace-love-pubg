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
        <div className="sameLine">
        <button className="linkButton" href={tournament.link}>Site</button>
        <a href={tournament.discord}><img src={discord} className="discord" alt="discord icon"/></a>
        </div>
        <br />
        <img variant="bottom" className="tourneyimg" src={tournament.img} alt="tournament logo" />
      </div>
      <br />
    </>
  )
}

export default GalleryCard
