import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Siderbar";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Header></Header>
      <Footer></Footer>
    </>
  );
}

export default App;
