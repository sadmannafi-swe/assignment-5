import type { Technology } from "./TechnologyCard";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologySectionProps {
  technologies: Technology[];
  selectedTechnologies: Technology[];
  loading: boolean;
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const TechnologySection = ({
  technologies,
  selectedTechnologies,
  loading,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologySectionProps) => {
  return (
    <section className="technology-section" id="technologies">
      <div className="section-heading">
        <h2>
          Explore the <span>Technologies</span>
        </h2>

        <p>
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading technologies...</p>
        </div>
      ) : (
        <div className="technology-layout">
          <div className="technology-grid">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={selectedTechnologies.some(
                  (item) => item.id === technology.id
                )}
                onAdd={onAdd}
              />
            ))}
          </div>

          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      )}
    </section>
  );
};

export default TechnologySection;