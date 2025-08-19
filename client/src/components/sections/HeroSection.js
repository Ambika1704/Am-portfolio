

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div
  className="hero"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background_image.png'})`,
  }}
>
      <div className="container">
        <div className="hero-content">
          <h1>Ambika B Sajjan</h1>
          <p className="subtitle">BCA Student</p>
          <p className="description">
           Aspiring front-end developer with a strong interest in creating responsive and user-centered web applications.
          </p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default HeroSection
