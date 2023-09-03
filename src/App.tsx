import "./App.css";
import { observer } from "mobx-react-lite";
import Wrapper from "./components/Wrapper";
import { RootStoreContext } from "./stores/root-store-context";
import RootStore from "./stores/rootstore";

const App = observer(() => {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <div className="App">
        <Wrapper />
      </div>
    </RootStoreContext.Provider>
  );
});

export default App;
