import './App.css';
import Navbar from 'components/Navbar';
import React from 'react';
import Top from 'components/Top';
import Footer from 'components/Footer';
import AktuelleProjekte from 'components/AktuelleProjekte';
import Details from 'components/Details';
import Spenden from 'components/Spenden';
import Headline from 'components/Headline';
import ProjektAccordion from 'components/ProjektAccordion';

function App() {
  return (<div>
    <Navbar/>
    <Top/>

    <Headline id = "Allgemeine Informationen" title = "Allgemeine Informationen" size = "h5"/>
    <Details/>

    <Headline id = "Geplante Projekte" title = "Geplante Projekte" size = "h5"/>
    <AktuelleProjekte/>

    <Headline id = "Vergangene Projekte" title = "Vergangene Projekte" size = "h5"/>
    <ProjektAccordion/>
    
    <Headline id = "Spendeninformationen" title = "Spendeninformationen" size = "h5"/>
    <Spenden/>
    <Footer/>
  </div>
  );
}

export default App;
