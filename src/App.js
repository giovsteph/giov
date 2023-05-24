import "./App.css";
import "./index.css";
import ScrollableContainer from "./components/Atoms/ScrollableContainer";

import MainPage from "./components/Pages/MainPage/MainPage";

function App() {
  return (
    <ScrollableContainer>
      <div className="App">
        <MainPage />
      </div>
    </ScrollableContainer>
  );
}

export default App;
