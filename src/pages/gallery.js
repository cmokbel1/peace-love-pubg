import { GalleryCard }from '../components'

const Gallery = (props) => {
  const { tournaments } = props;
  return (
    <>
      <h1 className="title">Tournaments:</h1>
    <div className="tournamentRow">
      {tournaments.map((tournament, idx) => <GalleryCard key={idx} tournament={tournament} />)}
    </div>
    </>
  )
}

export default Gallery;