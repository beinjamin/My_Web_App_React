import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import {Router, Switch,Link,BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
  <div className="m-3">
    <Counter title="Profile" value={1} image="images/profile.jpeg" />
    <Counter title="Cup" value={2} image="images/cup.png" />

  </div>
  );
}

export default App;
