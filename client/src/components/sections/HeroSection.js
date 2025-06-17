

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div
  className="hero"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background_image.jpeg'})`,
  }}
>
      <div className="container">
        <div className="hero-content">
          <h1>Ambika B Sajjan</h1>
          <p className="subtitle">BCA Student</p>
          <p className="description">
            From Biology to Binary Exploring the Intersection of Life Sciences and Technology
          </p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default HeroSection
