import './App.css'
import { useState } from "react"
import ConnectAPI from './components /ConnectApi';
import Playerslist from './components/Playerslit';
import { Routes, Route, Link } from 'react-router-dom';
import singlePlayer from './components/singlePlayer';
import CreateForm from "./components/CreateForm";


const App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null)

  return (
    <>
      <ConnectAPI setPlayers={setPlayers} />

      <nav>
        <ul>
          <li>
            <h3>
              <Link to='/'>Home </Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to='/players'>All Players </Link>
            </h3>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/players" element={<Playerslist players={players} setSelectedPlayerId={setSelectedPlayerId} />} />
        <Route path='/players/:playerId' element={<SinglePlayer puppyArray={players} selectedPlayerId={selectedPlayerId} />} />
      </Routes>

      <CreateForm />

      {(selectedPlayerId !== null) ? (
        <singlePlayer puppyArray={players} selectedPlayerId={selectedPlayerId}/>
        ) : (
          <Playerslist players={players} selectedPlayerId={selectedPlayerId} setSelectedPlayerId={setSelectedPlayerId} />
        )}
    </>
  );
};

export default App
