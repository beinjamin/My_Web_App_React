import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import {Router, Switch,Link,BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
  <Router>
    <nav className="navbar navbar-expand navbar-brand m-2">
    <ul className="navbar-nav">
      <li> 
      <link className='nav-link' to="/home">Home</link> 
      </li>
      <li> 
      <link className='nav-link'  to="/counter">Counter</link> 
      </li>
      <li> 
      <link className='nav-link'  to="/about">About</link> 
      </li>
      <li> 
      <link className='nav-link' to="/gallery">Gallery</link> 
      </li>
    </ul>
    




    </nav>
    </Router>
  
  );
}

export default App;
