import ColorMakerList from "./components/ColorMakerList";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <ColorMakerList />
      </Container>
    </div>
  );
}

export default App;
