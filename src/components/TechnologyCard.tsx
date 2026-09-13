export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <article className={`technology-card ${isAdded ? "added" : ""}`}>
      <div className="card-top">
        <img
          src={technology.icon}
          alt={technology.name}
          className="technology-icon"
        />

        <span className="technology-badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-info">
        <span className="category-chip">{technology.category}</span>

        <span className="difficulty">{technology.difficulty}</span>

        <span className="rating">
          <span className="star">★</span>
          {technology.rating}
        </span>
      </div>

      <button
        className={`add-stack-button ${isAdded ? "added" : ""}`}
        onClick={() => onAdd(technology)}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;