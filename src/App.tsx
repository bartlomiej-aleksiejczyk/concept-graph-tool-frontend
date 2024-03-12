import { PersistenceProvider } from "./shared/services/persistance/persistanceProvider";
import SidebarContainer from "./components/sidebarcontainer/SidebarContainer";

function App() {
  return (
    <PersistenceProvider>
      <SidebarContainer />
    </PersistenceProvider>
  );
}

export default App;
