import api from "../Api"

const [fila, setData] = useState([]);
const [feitas, setData_feitas] = useState([]);
const [abandonadas, setData_abandonadas] = useState([]);
const [recebidas, setData_rescebidas] = useState([]);
const [atendiadas, setData_atendidas] = useState([]);
const [tmes, setData_tmes] = useState([]);
const [tmas, setData_tmas] = useState([]);
const [nivel, setData_nivel] = useState([]);
const [notificacao, setNotificacao] = useState([]);
const emFila = fila.length;
var {height, width} = getWindowDimensions();
var inicio = 0;

if (notificacao.length == 0 && inicio == 0) {
    inicio = 1;
    getNotificacao();
  }

function getNotificacao() 
    fetch('http://200.229.156.16:3001/db')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setNotificacao(data);
      });

    
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

useEffect(() => { setInterval(fetchMyAPI, 5000) }, [])


const fetchMyAPI_feitas = async () => {
    var response = await api.get("../dashboard/supervisor");
    setData_feitas(response.data.result.stats.stats_all.stats.counts.outgoing_answer.start_of_this.day);
  }

  useEffect(() => { setInterval(fetchMyAPI_feitas, 40000) }, [])