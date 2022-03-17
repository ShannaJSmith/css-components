import { BrowserRouter as Router, Route } from 'react-router-dom';
import Background1 from './pages/Background1';
import Background2 from './pages/Background2';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" />
        <Route path="/background1" component={Background1} />
        <Route path="/background2" component={Background2} />
      </div>
    </Router>
  );
}

export default App;
