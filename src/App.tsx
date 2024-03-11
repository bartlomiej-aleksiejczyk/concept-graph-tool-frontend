import "./App.css";
import { PersistenceProvider } from "./shared/services/persistance/persistanceProvider";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/mira/theme.css";
import { Menubar } from "primereact/menubar";

function App() {
  const menubarModel = [{ label: "items" }];

  return (
    <PrimeReactProvider>
      <PersistenceProvider>
        <Menubar model={menubarModel} />
      </PersistenceProvider>
    </PrimeReactProvider>
  );
}

export default App;
