import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import {Router, Switch,Link,BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
  <Router>
    <nav className="navbar">
    <ul className="navbar-nav">
      <li> 
      <link to="/home">Home</link> 
      </li>
      <li> 
      <link to="/counter">Counter</link> 
      </li>
      <li> 
      <link to="/about">About</link> 
      </li>
      <li> 
      <link to="/gallery">Gallery</link> 
      </li>
    </ul>
    




    </nav>
  </Router>
  );
}

export default App;
