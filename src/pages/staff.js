import { StaffCard } from '../components'

const Staff = (props) => {
  const { staffMembers } = props;
  return (
    <>
    <h1>Our Team</h1>
    <div className="staffRow">
      {staffMembers.map((staffMember, idx) => <StaffCard key={idx} staffMember={staffMember} />)}
    </div>
    </>
  )
}

export default Staff;