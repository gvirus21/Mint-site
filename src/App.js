import './App.css';
import { useState } from "react";
import Navbar from './components/NavBar';
import MainMint from './components/MainMint';

function App() {
  const [accounts, setAccounts] = useState([]);
  
  return (
    <div className="App">
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <MainMint accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
}

export default App;
