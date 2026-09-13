import type { Technology } from "./TechnologyCard";
import StackItem from "./StackItem";

interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="your-stack">
      <div className="stack-header">
        <h2>Your Stack</h2>

        <p>
          {selectedTechnologies.length === 0
            ? "No technologies selected yet."
            : `${selectedTechnologies.length} ${
                selectedTechnologies.length === 1
                  ? "Technology"
                  : "Technologies"
              } Selected`}
        </p>
      </div>

      {selectedTechnologies.length === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="stack-list">
            {selectedTechnologies.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>

          <button
            className="remove-all-button"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;