import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProgectSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddingProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={handleStartAddingProject} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddingProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
