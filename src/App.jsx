import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
       <header>Notificação de parada</header>
    <nav>Fila URA</nav>

    <main class="Indicadores">
        <item class="Indi">TMA</item>
        <item class="Indi">TME
        </item>
        <item class="Indi">TMO</item>
        <item class="Indi">RECEBIDAS</item>
        <item class="Indi">ATENDIDAS</item>
        <item class="Indi">REJEITAS</item>
    </main>
        <footer>Fila Whatsapp</footer>
    </div>
  )
}

export default App
