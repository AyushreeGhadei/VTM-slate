import './Card.css'

interface CardProps {
  title: string
  description: string
  imageUrl?: string
}

const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <div className="card">
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  )
}

export default Card
