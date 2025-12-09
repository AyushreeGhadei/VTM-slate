import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <main className="homepage-main">
        <section className="hero-section">
          <h1 className="hero-title">Welcome to VTM Slate</h1>
          <p className="hero-subtitle">Your modern web application platform</p>
        </section>
        
        <section className="cards-section">
          <div className="cards-container">
            <Card 
              title="Getting Started"
              description="Learn how to use VTM Slate and explore its powerful features."
            />
            <Card 
              title="Documentation"
              description="Comprehensive guides and API references for developers."
            />
            <Card 
              title="Community"
              description="Join our community and connect with other developers."
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Homepage