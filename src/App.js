import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";


function App() {
  return (
  <div className="m-3">
    <Counter title="Counter 1" value={1} image="images/profile.jpeg" />
  </div>
  );
}

export default App;
