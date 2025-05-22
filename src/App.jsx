import "./App.css";
import Router  from './router/Routes'
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Pages from "./Pages";
function App() {
  return (
    <>
    <Navbar/>
      <Router></Router>
      <Footer/>
    </>
  );
}
export default App;