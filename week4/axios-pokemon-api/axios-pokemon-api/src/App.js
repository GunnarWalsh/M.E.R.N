
import './App.css';
import axios from 'axios'
import {useState , useEffect} from 'react'
function App() {

  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then((result)=>{
        console.log(result.data)
        setState(result.data.results)
      }).catch((err)=>{
        console.log(err)
      })
  }, []);


  const [state, setState] = useState({})

  return (
    <div className="App">
      {/* <h1>{state[0].name}</h1> */}
      <h1>hello</h1>
      {
        state.map((pokemon) =>(
          <p>{pokemon.name}</p>
        ))
      }

    </div>
  );
}

export default App;
