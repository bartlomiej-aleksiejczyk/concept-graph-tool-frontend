import "./App.css";
import { TopBar } from "./components/topbar/TopBar";
import { PersistanceService } from "./shared/services/persistance/PersistanceService";
import { ApiService } from "./shared/services/persistance/apiServices";
import { LocalStorageService } from "./shared/services/persistance/localStorageService";

function App() {
  const useLocalStorage = true;
  const dataService: PersistanceService = useLocalStorage ? new LocalStorageService() : new ApiService();
  return (
    <>
      <TopBar/>
      <span className="text-orange-700">JKJKKK</span>
    </>
  );
}

export default App;
