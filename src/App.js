import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";



function App() {
  return (
    <div>
      <Counter title="profile" value={1} image="images/profile.jpeg"/>
      <Counter title="profile" value={1} image="images/cup.png"/>
    </div>
  
  
  );
}

export default App;

