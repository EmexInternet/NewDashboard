import { useEffect, useState } from 'react'
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { faWhatsapp, faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import {  } from '@fortawesome/free-solid-svg-icons';
// library.add(faWhatsapp);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function Sz() {

  var {height, width} = getWindowDimensions();

  return (

  <body className='body-sz' style={{height: height, width:width, fontSize: height*0.052, margin: 0 }}>

    <div style={{display: 'flex', flexWrap:'wrap', flexDirection: 'column'}}>

      <div className='Fila' style={{width:width*0.1828125,height:height*0.95, fontSize: height*0.03, margin: height*0.007291667, marginLeft: height*0.02, marginTop: height*0.02}}>
        <h1 style={{fontSize: height*0.05, fontfamily: 'Montserrat', fontWeight:400}}>Fila SZ: {1}</h1>

        <ul style= {{padding: height*0.009259259, margin: 0}}>

          
            {/* {filal.map(filal => ( */}
              <li style= {{backgroundColor: '#253865', borderRadius: 8, margin: height*0.009259259, listStyle:'none', 
                width: width*0.165, height: height*0.13, alignItems:'center', paddingTop: width*0.008, lineHeight:height*0.0001}} key={1} className='row'>
                  <div style={{ fontSize: width*0.01, color: '#EBF5EE' }}>{'(024) 9992-33020'}<span style={{marginLeft: '12px'}}><FontAwesomeIcon style={{fontSize: '1.2em'}} icon={faWhatsapp} /></span></div>
                  <h4 style={{font: 'Montserrat',fontSize: width*0.015, color: '#EBF5EE' }}>{'Suporte'}</h4>
                  <h4 style={{font: 'Open Sans',fontSize: width*0.02, color: 'white' }}>{'1:01'}</h4>
              </li>

              <li style= {{backgroundColor: '#253865', borderRadius: 8, margin: height*0.009259259, listStyle:'none', 
                width: width*0.165, height: height*0.13, alignItems:'center', paddingTop: width*0.008, lineHeight:height*0.0001}} key={1} className='row'>
                  <div style={{ fontSize: width*0.01, color: '#EBF5EE' }}>{'Leonardo Ferreira'}<span style={{marginLeft: '12px'}}><FontAwesomeIcon style={{fontSize: '1.2em'}} icon={faFacebookMessenger } /></span></div>
                  <h4 style={{font: 'Montserrat',fontSize: width*0.015, color: '#EBF5EE' }}>{'Suporte'}</h4>
                  <h4 style={{font: 'Open Sans',fontSize: width*0.02, color: 'white' }}>{'1:01'}</h4>
              </li>

              <li style= {{backgroundColor: '#253865', borderRadius: 8, margin: height*0.009259259, listStyle:'none', 
                width: width*0.165, height: height*0.13, alignItems:'center', paddingTop: width*0.008, lineHeight:height*0.0001}} key={1} className='row'>
                  <div style={{ fontSize: width*0.01, color: '#EBF5EE' }}>{'@leofardo_'}<span style={{marginLeft: '12px'}}><FontAwesomeIcon style={{fontSize: '1.2em'}} icon={faInstagram} /></span></div>
                  <h4 style={{font: 'Montserrat',fontSize: width*0.015, color: '#EBF5EE' }}>{'Suporte'}</h4>
                  <h4 style={{font: 'Open Sans',fontSize: width*0.02, color: 'white' }}>{'1:01'}</h4>
              </li>
            {/* ))} */}
        </ul>
      </div>


        <div className='Indicadores' style={{width: width*0.7609375, height: height*0.409259259, paddingTop: height*0.037037037}}>
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={15000} showIndicators={false} showArrows={false} width={width*0.80} showStatus={false} transitionTime={500}>
            <div className='Dash1' style={{display: 'flex', flexWrap: 'wrap', gap: width*0.028125, alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
              <div className='Indi' style={{borderRadius: 8, fontSize:height*0.06,width:width*0.232, height:height*0.19, gap: height*0.028}}>TMA <div className='Values' style={{FontSize: width*0.07}}>{1}</div>  </div>
              <div className='Indi' style={{borderRadius: 8, fontSize:height*0.06,width:width*0.232, height:height*0.19, gap: height*0.028}}>TME <div className='Values' style={{FontSize: width*0.07}}>{1}</div> </div>
              <div className='Indi' style={{borderRadius: 8, fontSize:height*0.06,width:width*0.232, height:height*0.19, gap: height*0.028}}>TMO <div className='Values' style={{FontSize: width*0.07}}>{1}</div> </div>
              <div className='Indi' style={{borderRadius: 8, fontSize:height*0.06,width:width*0.232, height:height*0.19, gap: height*0.028}}>RECEBIDAS <div className='Values' style={{FontSize: width*0.07}}>{1}</div></div>
              <div className='Indi' style={{borderRadius: 8, fontSize:height*0.06,width:width*0.232, height:height*0.19, gap: height*0.028}}>ATENDIDAS <div className='Values' style={{FontSize: width*0.07}}>{1}</div></div>
              <div className='Indi' style={{borderRadius: 8, fontSize:height*0.06,width:width*0.232, height:height*0.19, gap: height*0.028}}>PERDIDAS <div className='Values' style={{FontSize: width*0.07}}>{1}</div></div>
            </div>

            <div className='Dash2' style={{display: 'flex', flexWrap: 'wrap', gap: width*0.028125, alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
              <div className='Indi2' style={{borderRadius: 8, fontSize:height*0.06,width: width*0.362, height: height*0.185, gap: height*0.028}}>Nível de serviço <div className='Values' style={{FontSize: width*0.07}}>{1}</div> </div>
              <div className='Indi2' style={{borderRadius: 8, fontSize:height*0.06 ,width: width*0.362, height: height*0.185, gap: height*0.028}}>Agentes Online <div  className='Values' style={{FontSize: width*0.07}}>{1}</div></div>
              <div className='Indi21' style={{borderRadius: 8, fontSize:height*0.06, width: width*0.232, height: height*0.187, gap: height*0.028}}>Em Linha <div  className='Values' style={{FontSize: width*0.07}}>{1}</div></div>
              <div className='Indi21' style={{borderRadius: 8, fontSize:height*0.06, width: width*0.232, height: height*0.187, gap: height*0.028}}>Disponíveis <div  className='Values' style={{FontSize: width*0.07}}>{1}</div></div>
              <div className='Indi21' style={{borderRadius: 8, fontSize:height*0.06, width: width*0.232, height: height*0.187, gap: height*0.028}}>Pausados <div  className='Values' style={{FontSize: width*0.07}}> {1}</div></div>
            </div>
          </Carousel>
        </div>

        <div style={{display: 'flex', flexWrap: 'wrap', gap: width*0.028125, justifyContent: 'center', marginTop: `${height*0.128125}px`}}>
            <div className='atendentes' style={{borderRadius: 8, fontSize:height*0.06,width: width*0.6, height: height*0.185, gap: height*0.028}}>
              <div style={{display: 'flex', justifyContent: 'center'}} >Atendentes</div>
            </div>
        </div>

    </div>
    
  </body>
  )
}


export default Sz
