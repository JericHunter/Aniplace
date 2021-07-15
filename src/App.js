import Title from './components/Title';
import Footer from './components/Footer';
import List from './components/List';
import Details from './components/Details';
import About from './pages/About';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Title />
          <Route exact path="/" component={List} />
          <Route exact path="/about" component={About} />
          <Route path="/details/:id" component={Details} />
          <Footer />
      </div>
    </Router>
  );
}
export default App;