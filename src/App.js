import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Ura from './Components/Ura/Ura'
import Sz from './Components/Sz/Sz';

function App() {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={30000} showIndicators={false} showArrows={false} width={'100vw'} showStatus={false} transitionTime={500}>
      <Carousel.Item>
        <Ura></Ura>
      </Carousel.Item>
      <Carousel.Item>
       <Sz></Sz>
      </Carousel.Item>
    </Carousel>
  );
}

export default App;



{/* 
<Carousel.Caption>
  <h3>Second slide label</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption> */}