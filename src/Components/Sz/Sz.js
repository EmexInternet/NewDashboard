import { useEffect, useState } from 'react'
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { faWhatsapp, faFacebookMessenger, faInstagram, faAmilia } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import API from './Api';
import fila from '../../fila.json'

// import { library } from '@fortawesome/fontawesome-svg-core';
// import {  } from '@fortawesome/free-solid-svg-icons';
// library.add(faWhatsapp);


function Sz(props) {
  function fmtMSS(s) { return (s - (s %= 60)) + (9 < s ? ':' : ':0') + parseInt(s); }
  const [token ,setToken] = useState([]);
  // const [clientesFila, setFila] = useState([]);
  const filal = fila
 


//   function executeHandleLogin() {
//     const data = {
//       "email": "teste@emexinternet.com.br",
//       "password": "3m3x@internet"
//     };
//     /* const handleLogin =*/ API.post('/auth/login', data)
//         .then(response=>{
//         setToken(response.data.token);
//         console.log('Pedi o Token, e encontrei')
//         // localStorage.setItem("accessToken", token);

//         const user = response.data.user
//           //handle user
//           .catch(e=>console.log(e))
//       });
//   }

// setInterval(executeHandleLogin, 50000,[])


//   const fetchMyAPI_Fila = (wait) => {
//   API.get(`/attendances/phase/${wait}`, {
//     headers: {
//       'Authorization': `Bearer ${token}`
//     }
//   })
//     .then(response => {
//       setFila(response.data);
//       console.log('Pedi a fila, e encontrei')
//     })
//     .catch(error => {
//       console.log('Pedi a fila, e não encontrei')
//       console.error(error);
//     });
//   }

// useEffect(() => { setInterval(fetchMyAPI_Fila('wait'), 5000) }, [])

const handleTemp = (event)=>{
  let lastWaitStart = null;

  for (let i = event.length - 1; i >= 0; i--) {
    const evento = event[i];
    if (evento.event === "waitStart") {
      lastWaitStart = evento;
      console.log(lastWaitStart)

      const now = new Date();
      const createdAt = new Date(lastWaitStart.created_at);

      const diffInMilliseconds = now - createdAt;

      // Para obter o tempo em minutos, dividimos por 1000 para transformar em segundos e em seguida por 60 para transformar em minutos
      const diffInMinutes = Math.round(diffInMilliseconds / 1000 / 60);

      console.log(`A diferença entre as datas é de ${diffInMinutes} minutos.`);

      return fmtMSS(diffInMinutes)
    }
  }
}

const handleIcon = (platform) => {
  if(platform  === 'Whatsapp' || platform  === 'WhatsappBusiness'){
    return <FontAwesomeIcon style={{fontSize: '1.2em'}} icon={faWhatsapp} />
  }else if(platform === 'InstagramDirect'){
    return <FontAwesomeIcon style={{fontSize: '1.2em'}} icon={faInstagram} />
  }else if(platform === 'Messenger'){
    return <FontAwesomeIcon style={{fontSize: '1.2em'}} icon={faFacebookMessenger} />
  }else{
    return <FontAwesomeIcon style={{fontSize: '1.2em'}} icon={faAmilia} />
  }
}

const handleName = (platform, number, name) => {
  
  if(platform  === 'Whatsapp' || platform  === 'WhatsappBusiness'){
    return number
  }else if(platform === 'InstagramDirect' || platform === 'Messenger'){
    return name.slice(0,10).trim() //cortando a string nome para 10 digitos no maximo e retirando os espaçamentos no começo e final da string
  }else{
    return 'Desconhecido'
  }

}

  return (

  <body className='body-sz' style={{height: props.height, width:props.width, fontSize: props.height*0.052, margin: 0 }}>

    <div style={{display: 'flex', flexWrap:'wrap', flexDirection: 'column'}}>

      <div className='Fila' style={{width:props.width*0.1828125,height:props.height*0.95, fontSize: props.height*0.03, margin: props.height*0.007291667, marginLeft: props.height*0.02, marginTop: props.height*0.02}}>
        <h1 style={{fontSize: props.height*0.05, fontfamily: 'Montserrat', fontWeight:400}}>Fila SZ: {filal.length}</h1>

        <ul style= {{padding: props.height*0.009259259, margin: 0}}>

          
            {filal.map(filal => (
              <li style= {{backgroundColor: '#253865', borderRadius: 8, margin: props.height*0.009259259, listStyle:'none', 
                width: props.width*0.165, height: props.height*0.13, alignItems:'center', paddingTop: props.width*0.008, lineHeight:props.height*0.0001}} key={filal.protocol} className='row'>
                  <div style={{ fontSize: props.width*0.01, color: '#EBF5EE' }}>{`${handleName(filal.platform, filal.platform_id, filal.name)}`}<span style={{marginLeft: '12px'}}>{handleIcon(filal.platform)}</span></div>
                  <h4 style={{font: 'Montserrat',fontSize: props.width*0.015, color: '#EBF5EE' }}>
                    {filal.campaign_id == '6047f56db4f2bb003126438d' ?  'Atendimento': (filal.campaign_id == '6047f56db4f2bb003126438f' ?  'Comercial': (filal.campaign_id == '6047f56db4f2bb003126438e' ?  'Suporte': filal.campaign_id == '6245dfaf0a995e2216156bfc' ?  'Suporte Avançado': 'Desconhecido'))}
                    </h4>
                  <h4 style={{font: 'Open Sans',fontSize: props.width*0.02, color: 'white' }}>{handleTemp(filal.events)}</h4>
              </li>
            ))}
        </ul>
      </div>


        <div className='Indicadores' style={{width: props.width*0.7609375, height: props.height*0.409259259, paddingTop: props.height*0.037037037}}>
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={15000} showIndicators={false} showArrows={false} width={props.width*0.80} showStatus={false} transitionTime={500}>
            <div className='Dash1' style={{display: 'flex', flexWrap: 'wrap', gap: props.width*0.028125, alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
              <div className='Indi' style={{borderRadius: 8, fontSize:props.height*0.06,width:props.width*0.232, height:props.height*0.19, gap: props.height*0.028}}>TMA <div className='Values' style={{FontSize: props.width*0.07}}>{1}</div>  </div>
              <div className='Indi' style={{borderRadius: 8, fontSize:props.height*0.06,width:props.width*0.232, height:props.height*0.19, gap: props.height*0.028}}>TME <div className='Values' style={{FontSize: props.width*0.07}}>{1}</div> </div>
              <div className='Indi' style={{borderRadius: 8, fontSize:props.height*0.06,width:props.width*0.232, height:props.height*0.19, gap: props.height*0.028}}>TMO <div className='Values' style={{FontSize: props.width*0.07}}>{1}</div> </div>
              <div className='Indi' style={{borderRadius: 8, fontSize:props.height*0.06,width:props.width*0.232, height:props.height*0.19, gap: props.height*0.028}}>RECEBIDAS <div className='Values' style={{FontSize: props.width*0.07}}>{1}</div></div>
              <div className='Indi' style={{borderRadius: 8, fontSize:props.height*0.06,width:props.width*0.232, height:props.height*0.19, gap: props.height*0.028}}>ATENDIDAS <div className='Values' style={{FontSize: props.width*0.07}}>{1}</div></div>
              <div className='Indi' style={{borderRadius: 8, fontSize:props.height*0.06,width:props.width*0.232, height:props.height*0.19, gap: props.height*0.028}}>PERDIDAS <div className='Values' style={{FontSize: props.width*0.07}}>{1}</div></div>
            </div>

            <div className='Dash2' style={{display: 'flex', flexWrap: 'wrap', gap: props.width*0.028125, alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
              <div className='Indi2' style={{borderRadius: 8, fontSize:props.height*0.06,width: props.width*0.362, height: props.height*0.185, gap: props.height*0.028}}>Nível de serviço <div className='Values' style={{FontSize: props.width*0.07}}>{1}</div> </div>
              <div className='Indi2' style={{borderRadius: 8, fontSize:props.height*0.06 ,width: props.width*0.362, height: props.height*0.185, gap: props.height*0.028}}>Agentes Online <div  className='Values' style={{FontSize: props.width*0.07}}>{1}</div></div>
              <div className='Indi21' style={{borderRadius: 8, fontSize:props.height*0.06, width: props.width*0.232, height: props.height*0.187, gap: props.height*0.028}}>Em Linha <div  className='Values' style={{FontSize: props.width*0.07}}>{1}</div></div>
              <div className='Indi21' style={{borderRadius: 8, fontSize:props.height*0.06, width: props.width*0.232, height: props.height*0.187, gap: props.height*0.028}}>Disponíveis <div  className='Values' style={{FontSize: props.width*0.07}}>{1}</div></div>
              <div className='Indi21' style={{borderRadius: 8, fontSize:props.height*0.06, width: props.width*0.232, height: props.height*0.187, gap: props.height*0.028}}>Pausados <div  className='Values' style={{FontSize: props.width*0.07}}> {1}</div></div>
            </div>
          </Carousel>
        </div>

        <div style={{display: 'flex', flexWrap: 'wrap', gap: props.width*0.028125, justifyContent: 'center', marginTop: `${props.height*0.128125}px`,  marginLeft: `${props.height*0.046}px`}}>
            <div className='atendentes' style={{borderRadius: 8, fontSize:props.height*0.06,width: '75.1vw', height: props.height*0.431, gap: props.height*0.028}}>
              <div style={{display: 'flex', justifyContent: 'center'}} >Atendentes</div>
            </div>
        </div>

    </div>
    
  </body>
  )
}


export default Sz
