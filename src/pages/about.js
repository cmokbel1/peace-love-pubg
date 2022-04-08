import largeLogo from '../images/Asset 1xxhdpi.png'

const About = () => {
  return (
    <>
      <div className="titleContent">
        <h1>About Us</h1>
        <img src={largeLogo} alt="large logo" />
        <h4>Founded on Dec 10th 2020</h4>
      </div>
      <div className="contentContainer">
        <h5>Mission Statement Mission Statement Mission Statement</h5>
        <br />
        <p>This is some generic filler text for the about us page that will show up when you click on the about link. This can be replaced with whatever information you find valuable to express your companies values and goals.  </p>
      </div>
    </>
  )
}

export default About