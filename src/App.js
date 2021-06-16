import ColorMakerList from "./components/ColorMakerList";
import Container from "./components/Container";
import Header from "./components/Header";
import UpgradeButton from "./components/UpgradeButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <ColorMakerList />
      </Container>
      <Container>
        <UpgradeButton></UpgradeButton>
      </Container>
    </div>
  );
}

export default App;
