import "./App.css";
import Header from "./components/TicToe/Header";
import TicToePage from "./pages/TicToePage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TicToePage />
      </main>
    </div>
  );
}

export default App;
