
import PersonCard from './PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard
          firstName={'Gunnar'}
          lastName={'Walsh'}
          age={24}
          hairColor={'Brown'}
        />
        <PersonCard
          firstName={'Matison'}
          lastName={'Cain'}
          age={25}
          hairColor={'Brown'}
        />
        <PersonCard
          firstName={'Shane'}
          lastName={'Johnson'}
          age={23}
          hairColor={'Blonde'}
        />
        <PersonCard
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
