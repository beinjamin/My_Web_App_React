import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import {Router, Switch,Link,BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
  <Router>
    <nav className="navbar">
    <ul className="">
      <li></li>
    </ul>
      <link to="/home">Home</link>
      <link to="/counter">Counter</link>
      <link to="/about">About</link>
      <link to="/gallery">Gallery</link>




    </nav>
  </Router>
  );
}

export default App;
