import './App.css';
import {useState} from 'react'
import Intermediate1 from './components/Intermediate1';
import UserContext from './contexts/UserContext';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSubmit = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const buttonVal = "Log " + (isLoggedIn ? "out" : "in")

  return (
    <div className="App">
      <h1>App</h1>
      <input onClick={handleSubmit} type="button" value={buttonVal} />
      <UserContext.Provider value={isLoggedIn}>
        <Intermediate1 />
      </UserContext.Provider>
    </div>
  );
}


export default App;
