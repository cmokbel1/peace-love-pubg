const StaffCard = (props) => {
  const { staffMember } = props

  return (
    <>
      <div className="cardContainer">
        <img variant="top" src={staffMember.img} alt="staff member" />
        <div className="cardBody">
          <h2>Name: {staffMember.name}</h2>
          <h3>Title: {staffMember.title}</h3>
          <h5>Hire Date: {staffMember.dateJoined}</h5>
          <p>reports to: {staffMember.reportsTo}</p>
          <p>Responsibilities: {staffMember.responsibilities}</p>
        </div>
      </div>
      <br />
    </>
  )
}

export default StaffCard
