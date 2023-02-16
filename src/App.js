import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Ura from './Components/Ura/Ura'
import Sz from './Components/Sz/Sz';
import React, { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App() {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {

    let timeoutId;

    function handleResize() {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setWindowDimensions(getWindowDimensions());
      }, 1500);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);  
  
  return (
    <Carousel interval={11115000} width={'100vw'} transitiontime={500}>
      {/* <Carousel.Item>
        <Ura height={windowDimensions.height} width={windowDimensions.width}/>
      </Carousel.Item> */}
      <Carousel.Item>
       <Sz height={windowDimensions.height} width={windowDimensions.width}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default App;
