import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    
    <div className="app">
        <Switch>
          <Route path='/' component={Home} />
          {/* <Route path='/about' component={About} /> */}
        </Switch>
    </div>
  );
}

export default App;
