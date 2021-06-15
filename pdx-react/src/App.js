import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
