import './staff.css'

const StaffCard = (props) => {
  const { staffMember } = props

  return (
    <>
      <div className="cardContainerStaff">
        <img variant="top" src={staffMember.img} alt="staff member" />
        <div className="cardBodyStaff">
          <h2>{staffMember.name}</h2>
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
