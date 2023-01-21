import Person from './components/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person
          firstName={'Gunnar'}
          lastName={'Walsh'}
          age={24}
          hairColor={'Brown'}
        />
        <Person
          firstName={'Matison'}
          lastName={'Cain'}
          age={25}
          hairColor={'Brown'}
        />
        <Person
          firstName={'Shane'}
          lastName={'Johnson'}
          age={23}
          hairColor={'Blonde'}
        />
        <Person
          firstName={'Wyatt'}
          lastName={'McKimmie'}
          age={26}
          hairColor={'Black'}
        />
      </header>
    </div>
  );
}

export default App;
