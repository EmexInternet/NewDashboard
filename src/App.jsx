import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Footer'
import { Carousel } from 'react-responsive-carousel'
function App() {
  const [notificacao, setNotificacao] = useState([])
  var inicio = 0;

  if (notificacao.length == 0 && inicio == 0) {
    inicio = 1;
    getNotificacao();
  }

  useEffect(() => { setInterval(setInterval(getNotificacao, 180000))}, [])

  function getNotificacao() {
    fetch('http://200.229.156.16:3001/db')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setNotificacao(data);
      });
  }

  console.log(notificacao.descricao_abertura)
  
  return (
<div>
    {notificacao.map(notificacao => (
      <div  key={notificacao.id_atendimento} className="notify">{notificacao.descricao_abertura}
      </div>
          ))}  
    <div className='Fila'>

    </div>
    <div className='Indicadores'>
        <div className='Indi'>TMA</div>
        <div className='Indi'>TME</div>
        <div className='Indi'>TMO</div>
        <div className='Indi'>RECEBIDAS</div>
        <div className='Indi'>ATENDIDAS</div>
        <div className='Indi'>REJEITAS</div>
    </div>
        <Footer/>
</div>
  )
}

export default App
