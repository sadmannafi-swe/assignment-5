import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";
import type { Technology } from "./components/TechnologyCard";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch {
        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyExists = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies((previous) =>
      previous.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechnologySection
          technologies={technologies}
          selectedTechnologies={selectedTechnologies}
          loading={loading}
          onAdd={handleAddToStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;