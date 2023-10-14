import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Service from "../pages/service/Service";
import TramitePostFuneral from "../components/UserProfile/Post-funeral/Post-Funeral";
import QueHacerAnteUnaDefuncion from "../components/UserProfile/Recomend-Defunciones/Recomend-Defunciones";
import Seguros from "../components/UserProfile//Seguros/Seguros";

const Routes = () => {
  return (
    <>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="services">
          <Route index element={<Services />} />
          <Route path=":service" element={<Service />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route
          path="/QueHacerAnteUnaDefuncion"
          element={<QueHacerAnteUnaDefuncion />}
        />{" "}
        <Route path="/TramitePostFuneral" element={<TramitePostFuneral />} />
        <Route path="/Seguros" element={<Seguros />} />
        <Route path="*" element={<h2>Error</h2>} />
      </ReactDomRoutes>
    </>
  );
};

export default Routes;
