import React from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
import MidContent from "./components/MidContent";
import Navbar from "./components/Navbar";
import IMAGES from "./images/index";



function App() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <MidContent/>
  <div className="cards">
  <Card
    img ={IMAGES.img10}
    rating ="5.0"
    reviews={6}
    Location="Online"
    title="Life Lessons with Arman Samim"
    price={138}
    openSpots={0}
  />
  <Card
    img ={IMAGES.wedding_phtography}
    rating ="5.0"
    reviews={30}
    Location="Online"
    title="Learn wedding photography"
    price={128}
    openSpots={27}
  />
  <Card className="biking"
    img ={IMAGES.biking}
    rating ="4.8"
    reviews={2}
    Location="USA"
    title="Group Mountain Biking With Suliman"
    price={150}
    openSpots={11}
  />
  </div>
  </>
  
  )
}

export default App;
