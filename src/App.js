import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import GamePage from './Component/GamePage/GamePage'
import RulePage from './Component/RulePage/RulePage'
import HomePage from './Component/HomePage/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<HomePage/>} />
        <Route path="rule" element={<RulePage/>} />
        <Route path="game" element={<GamePage/>} />

        <Route path="*" element={<Navigate replace to='/home' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
