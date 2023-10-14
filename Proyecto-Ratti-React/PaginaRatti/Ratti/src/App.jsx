import Routes from "./Routes/Routes";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import ModalContact from "./components/Contact/modalContacto/ModalContact";
function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Routes />
        <ModalContact />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
