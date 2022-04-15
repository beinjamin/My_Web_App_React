import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import {Router, Switch,Link,BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
  <Router>
    <nav>
      <link to="/home">Home</link>
      <link to="/counter">Home</link>
      <link to="/about">Home</link>
      <link to="/gallery">Home</link>




    </nav>
  </Router>
  );
}

export default App;
