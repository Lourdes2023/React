import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Fotter/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <About />
        <Services />
        <Contact />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
