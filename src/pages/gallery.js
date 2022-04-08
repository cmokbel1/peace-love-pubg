import { GalleryCard }from '../components'

const Gallery = (props) => {
  const { tournaments } = props;
  return (

    <div className="tournamentRow">
      <h1>Tournaments:</h1>
      {tournaments.map((tournament, idx) => <GalleryCard key={idx} tournament={tournament} />)}
    </div>
  )
}

export default Gallery;