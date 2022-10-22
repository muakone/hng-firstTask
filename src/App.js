import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Profile from "./component/Profile"
import Links from "./component/Links"

function App() {
  return (
    <div className="App">
      <Profile />
      <Links />
    </div>
  );
}

export default App;
