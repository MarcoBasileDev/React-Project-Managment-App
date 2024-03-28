import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProgectSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NewProject />
    </main>
  );
}

export default App;
