import type { Technology } from "./TechnologyCard";

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

const StackItem = ({ technology, onRemove }: StackItemProps) => {
  return (
    <div className="stack-item">
      <img
        src={technology.icon}
        alt={technology.name}
        className="stack-icon"
      />

      <div className="stack-item-info">
        <h4>{technology.name}</h4>
        <span>{technology.category}</span>
      </div>

      <button
        className="remove-item-button"
        onClick={() => onRemove(technology.id)}
        aria-label={`Remove ${technology.name}`}
      >
        ×
      </button>
    </div>
  );
};

export default StackItem;