
import './App.css';
import {Route , Routes, Link} from 'react-router-dom'
import Home from './components/Home';
import Number from './components/Number';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:word' element={<Number/>}/>
        <Route path='/:events/:font/:background' element={<Events/>}/>
      </Routes>
    </div>
  );
}

export default App;
