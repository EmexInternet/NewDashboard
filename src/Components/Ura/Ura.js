import { useEffect, useState } from 'react'
import api from './Api'
import './App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function Ura() {
  function fmtMSS(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + parseInt(s); }
  const [notificacao, setNotificacao] = useState([])
  const [fila, setData] = useState([]);
  const [tmes, setData_tmes] = useState([]);
  const [tmas, setData_tmas] = useState([]);
  const [nivel, setData_nivel] = useState([]);
  const [abandonadas, setData_abandonadas] = useState([]);
  const [recebidas, setData_rescebidas] = useState([]);
  const [atendiadas, setData_atendidas] = useState([]);
  const [logados, setLogados] = useState([]);
  const [avaliacao, setData_avaliacao] = useState([]);

  var {height, width} = getWindowDimensions();
  var inicio = 0;

  if (notificacao.length == 0 && inicio == 0) {
    inicio = 1;
    getNotificacao();
  }
  
  //Busca as notificações novas no sitema a cada 3 minutos
  useEffect(() => { setInterval(setInterval(getNotificacao, 18000))}, [])
  //Busca as notificações de parada. Retorna um array
  function getNotificacao() {
    fetch('http://200.229.156.16:3001/db')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setNotificacao(data);
      });
  }

  //Busca a fila de atendimento na API. Retorna um array de objetos.
  const fetchMyAPI = async () => {
    var response = await api.get("../monitor/calls_in_queue");
    if (Array.isArray(response.data.result))
    {
      setData(response.data.result)
    }
    else
    {
      setData(fila)
    }
  }
  fila.sort(function (x,y){
    if(x.wait > y.wait){return -1;}
    else {return true;}
  });

  const filal = fila.slice(0,5)
  //Altera o estado da fila, para o tempo de espera do assinante a cada 1 segundo
  useEffect(() => { setInterval(fetchMyAPI, 5000) }, [])
  //console.log(fmtMSS(fila.wait))>
  ////// A partir daqui busca os dados de chamada da URA
  //Busca os dados de chamada recebidas, retorna um valor inteiro
  const fetchMyAPI_rescebidas = async () => {
    var response = await api.get("../dashboard/supervisor");
    setData_rescebidas(response.data.result.stats.stats_all.queues.Atendimento.counts.incoming.start_of_this.day);
  }
  useEffect(() => { setInterval(fetchMyAPI_rescebidas, 40000) }, [])

  const fetchMyAPI_atendidas = async () => {
    var response = await api.get("../dashboard/supervisor");
    setData_atendidas(response.data.result.stats.stats_all.queues.Atendimento.counts.incoming_answer.start_of_this.day);
  }
  useEffect(() => { setInterval(fetchMyAPI_atendidas, 40000) }, [])

 const fetchMyAPI_abandonadas = async () => {
    var response = await api.get("../dashboard/supervisor");
    setData_abandonadas(response.data.result.stats.stats_all.queues.Atendimento.counts.incoming_lost.start_of_this.day);
  }
  useEffect(() => { setInterval(fetchMyAPI_abandonadas, 40000) }, [])
  ////// A partir daqui busca os indicadores de desempenho da URA

  //Busca o tempo médio de espera na API. Retorna uma média de valores
  const fetchMyAPI_tmes = async () => {
    var response = await api.get("../monitor/stats_summary");
    setData_tmes(response.data.result.queues.Atendimento.avgs.wait_time.start_of_this.day.avg);
  }
  useEffect(() => { setInterval(fetchMyAPI_tmes, 40000) }, [])
 //console.log(tmes)

  //Busca o tempo médio de atendimento na API. Retorna uma média de valores
  const fetchMyAPI_tmas = async () => {
    var response = await api.get("../monitor/stats_summary");
    setData_tmas(response.data.result.stats.avgs.talk_time.start_of_this.day.avg);
  }
  useEffect(() => { setInterval(fetchMyAPI_tmas, 40000) }, [])

  //Busca o nível de serviço na API. Retorna o nível de serviço em porcentagem
  const fetchMyAPI_nivel = async () => {
    var response = await api.get("../monitor/stats_summary");
    setData_nivel(response.data.result.queues.Atendimento.service_levels.start_of_this.day);
  }

  useEffect(() => { setInterval(fetchMyAPI_nivel, 40000) }, [])
  //console.log(nivel)

  //Busca os agentes logados na API. Retorna um array.

     const fetchMyAPI_logados = async () => {
      var response = await api.get("../monitor/extens");
      setLogados(response.data.result);
    }
    useEffect(() => { setInterval(fetchMyAPI_logados, 5000) }, [])


    const atendentes = logados.filter(
      function(value) {
        return value.exten === "1000" && value.device_status === "registered"|| value.exten === "1001" && value.device_status === "registered"|| value.exten === "1003" && value.device_status === "registered"
      || value.exten === "1004" && value.device_status === "registered"|| value.exten === "1005" && value.device_status === "registered" || value.exten === "1006" && value.device_status === "registered"
      || value.exten === "1007" && value.device_status === "registered"|| value.exten === "1008" && value.device_status === "registered" || value.exten === "1009" && value.device_status === "registered"
      || value.exten === "1020" && value.device_status === "registered"|| value.exten === "1021" && value.device_status === "registered" || value.exten === "1022" && value.device_status === "registered"
      || value.exten === "1023" && value.device_status === "registered" 
      }); 

      const emLinha = atendentes.filter(
        function(value) {
          return value.status === "incall"
        });

      const Ociosos = atendentes.filter(
        function(value) {
          return value.status === "available" && value.is_paused == false
        }
      );

      const Pausados = atendentes.filter(
        function(value) {
          return value.is_paused === true
        });   

      /*const fetchMyAPI_avaliacao = async ()=> {
        var response = await api.get("../dashboard/supervisor");
        setData_avaliacao(response.data.result.stats.stats_by_extens)
      }
      useEffect(() => { setInterval(fetchMyAPI_avaliacao, 40000) }, [])

      console.log(avaliacao)*/

  return (

<body className='body-color-ura' style={{height: height, width:width, fontSize: height*0.052, margin: 0 }}>

  <div style={{display: 'flex', flexWrap:'wrap', flexDirection: 'column'}}>

  <div className='Fila' style={{width:width*0.1828125,height:height*0.95, fontSize: height*0.03, margin: height*0.007291667, marginLeft: height*0.02, marginTop: height*0.02}}>
      <h1 style={{fontSize: height*0.05, fontfamily: 'Montserrat', color: "#60993E", fontWeight:400}}>Fila URA: {fila.length}</h1>

    <ul style= {{padding: height*0.009259259, margin: 0}}>
          {filal.map(filal => (
      <li style= {{backgroundColor: '#283044', borderRadius: 8, margin: height*0.009259259, listStyle:'none', 
      width: width*0.165, height: height*0.13, alignItems:'center', paddingTop: width*0.008, lineHeight:height*0.0001}} key={filal.linkdid} className='row'>
          <div style={{ fontSize: width*0.01, color: '#EBF5EE' }}>{filal.src}</div>
          <h4 style={{font: 'Montserrat',fontSize: width*0.015, color: '#EBF5EE' }}>{filal.queue}</h4>
          <h4 style={{font: 'Open Sans',fontSize: width*0.02, color: 'white' }}>{fmtMSS(filal.wait)}</h4>
      </li>
    ))}
    </ul>
  </div>

    <div className='notify' style={{font: 'Open Sans',width: width*0.76, height: height*0.20, marginTop: height*0.02, marginLeft: height*0.04, display: 'flex', borderRadius: 8}}>
      {notificacao.length > 0 ? (
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false} interval={15000} showStatus={false} showArrows={false} width={width*0.76}>
          {notificacao.map(notificacao => (
            <text key={notificacao.id_atendimento}>{notificacao.descricao_abertura}</text>
            ))}
         </Carousel>) : <text style={{fontsSize: height*0.24}}>Nenhuma notificação</text>}
    </div>

    <div className='Indicadores' style={{width: width*0.7609375, height: height*0.409259259, paddingTop: height*0.037037037}}>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={15000} showIndicators={false} showArrows={false} width={width*0.80} showStatus={false} transitionTime={500}>
      <div className='Dash1' style={{display: 'flex', flexWrap: 'wrap', gap: width*0.028125, alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
        <div className='Indi' style={{borderRadius: 8, fontSize:height*0.06,width:width*0.232, height:height*0.19, gap: height*0.028}}>TMA <div className='Values' style={{FontSize: width*0.07}}>{fmtMSS(tmas)}</div>  </div>
        <div className='Indi' style={{borderRadius: 8, fontSize:height*0.06,width:width*0.232, height:height*0.19, gap: height*0.028}}>TME <div className='Values' style={{FontSize: width*0.07}}>{fmtMSS(tmes)}</div> </div>
        <div className='Indi' style={{borderRadius: 8, fontSize:height*0.06,width:width*0.232, height:height*0.19, gap: height*0.028}}>TMO <div className='Values' style={{FontSize: width*0.07}}>{fmtMSS(tmes+tmas)}</div> </div>
        <div className='Indi' style={{borderRadius: 8, fontSize:height*0.06,width:width*0.232, height:height*0.19, gap: height*0.028}}>RECEBIDAS <div className='Values' style={{FontSize: width*0.07}}>{recebidas}</div></div>
        <div className='Indi' style={{borderRadius: 8, fontSize:height*0.06,width:width*0.232, height:height*0.19, gap: height*0.028}}>ATENDIDAS <div className='Values' style={{FontSize: width*0.07}}>{atendiadas}</div></div>
        <div className='Indi' style={{borderRadius: 8, fontSize:height*0.06,width:width*0.232, height:height*0.19, gap: height*0.028}}>PERDIDAS <div className='Values' style={{FontSize: width*0.07}}>{abandonadas}</div></div>
      </div>

      <div className='Dash2' style={{display: 'flex', flexWrap: 'wrap', gap: width*0.028125, alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
        <div className='Indi2' style={{borderRadius: 8, fontSize:height*0.06,width: width*0.362, height: height*0.185, gap: height*0.028}}>Nível de serviço <div className='Values' style={{FontSize: width*0.07}}>{nivel}</div> </div>
        <div className='Indi2' style={{borderRadius: 8, fontSize:height*0.06 ,width: width*0.362, height: height*0.185, gap: height*0.028}}>Agentes Online <div  className='Values' style={{FontSize: width*0.07}}>{atendentes.length}</div></div>
        <div className='Indi21' style={{borderRadius: 8, fontSize:height*0.06, width: width*0.232, height: height*0.187, gap: height*0.028}}>Em Linha <div  className='Values' style={{FontSize: width*0.07}}>{emLinha.length}</div></div>
        <div className='Indi21' style={{borderRadius: 8, fontSize:height*0.06, width: width*0.232, height: height*0.187, gap: height*0.028}}>Disponíveis <div  className='Values' style={{FontSize: width*0.07}}>{Ociosos.length}</div></div>
        <div className='Indi21' style={{borderRadius: 8, fontSize:height*0.06, width: width*0.232, height: height*0.187, gap: height*0.028}}>Pausados <div  className='Values' style={{FontSize: width*0.07}}> {Pausados.length}</div></div>
      </div>
      </Carousel>
    </div>

    {/* <div className='Avalia' style={{width:width*0.759, height:width*0.125, marginLeft:width*0.024, marginTop:width*0.03 }}>
        <div className='AvaliaTitulo'>Melhores avaliações URA</div>
        <div className='Avaliacoes' style={{width:width*0.759, height:height*0.172, display:'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-around', }}>
          <div>
            Dyego
            <div>5,5</div>
          </div>
          
          <div>
            Pedro
            <div>5,5</div>
          </div>
          
          <div>
            Rafael
            <div>5,5</div>
          </div>
        </div>
    </div> */}

  </div>
  
</body>
  )
}


export default Ura
