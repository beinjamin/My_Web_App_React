import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import {Route, Switch,Link,BrowserRouter as Router} from 'react-router-dom';
import About from "./components/About";


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
    <div className='container'>
    <Switch>
    <Router path='/home'></Router>

    <Router path='/counter' component={Counter}></Router>
    <Router path='/about' component={About}></Router>
    <Router path='/gallery' ></Router>



    </Switch>

    </div>
    </Router>
  
  );
}

export default App;
