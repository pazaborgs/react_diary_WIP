import './App.css';
import Formulario from './componentes/Formulario';
import { useState} from 'react';
import Diario from './componentes/Diario';



function App() {

  const moods = [
    {
      nome: 'Triste',
      cor: '#9B7793',
    },

    {
      nome: 'Pessimista',
      cor: '#C1A7E2',
    },

    {
      nome: 'Neutro',
      cor: '#F5E1A4',
    },

    {
      nome: 'Animado',
      cor: '#FFBE9F',
    },

    {
      nome: 'Feliz',
      cor: '#E0457B',
    },


  ]

  // Métodos

  const [episodios, setEpisodios] = useState([])
  const [datas, setDatas] = useState([])

  const aoNovoEpisodio = (episodio) => {
    setEpisodios([...episodios, episodio])

    if (datas.includes(episodio.data)) {
      console.log("Exist");   
      return;
    } 

    else {
      setDatas([...datas, episodio.data])
    }

    

    // check before adding data

    console.log(episodios)
    console.log(datas)
  }

  // Persistência do State

  // Atualiza Lista de Notas

  // useEffect(() => {
  //   localStorage.setItem('minhas_notas', JSON.stringify(episodios));
  // }, [episodios])

  // Carrega Lista de Notas

  //Pelo amor de deus termina isso seu corno


  // Render

  return (
    <div className="App">
      <Formulario
        aoContarEpisodio={episodio => aoNovoEpisodio(episodio)}
        moods={moods.map(mood => mood.nome)}
      />

    {datas.map(data => <Diario
        data = {data}
        setEpisodios={setEpisodios}
        episodios={episodios.filter(episodio => episodio.data === data)}
        moods={moods}
      />)}

    </div>
  );
}

export default App;
