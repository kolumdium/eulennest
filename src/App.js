import './App.css';
import Navbar from 'components/Navbar';
import React, { useEffect } from 'react';
import Top from 'components/Top';
import Footer from 'components/Footer';
import AktuelleProjekte from 'components/AktuelleProjekte';
import Details from 'components/Details';
import Spenden from 'components/Spenden';
import Headline from 'components/Headline';
import ProjektAccordion from 'components/ProjektAccordion';
import MetaTags from 'react-meta-tags';

function App() {
  // useEffect(() => {
  //   document.title = "Eulennest"
    // document.description = "Eine Website um dem Förderverein der Kinderheims Eulennest Aufmerksamkeit zu schenken."
  // }, []);
  return (<div>
    <MetaTags>
      <title>Eulennest</title>
      <meta name="description" content="Eine Website um dem Förderverein der Kinderheims Eulennest Aufmerksamkeit zu schenken." />
      <meta property="og:title" content="Eulennest" />
      {/* <meta property="og:image" content="path/to/image.jpg" /> */}
    </MetaTags>
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
