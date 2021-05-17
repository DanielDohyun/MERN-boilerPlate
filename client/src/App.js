import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Register'

function App() {
  return (
    
    <div className="app">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} />
        </Switch>
    </div>
  );
}

export default App;
