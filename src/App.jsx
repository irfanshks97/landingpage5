import "./App.css";
import Header from "./Components/Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Footer from "./Components/Footer/Footer";
import Maincontent from "./Components/Maincontent/Maincontent";
function App() {
  return (
    <>
      <Header />
      <Maincontent />
      <Footer />
    </>
  );
}

export default App;
