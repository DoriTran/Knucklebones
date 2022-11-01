import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import AnimateRoute from './Component/AnimateRoute/AnimationRoute'
import BGMPlayer from './Component/BGMPlayer/BGMPlayer'

import GamePage from './Component/PageComponent/GamePage/GamePage'
import RulePage from './Component/PageComponent/RulePage/RulePage'
import HomePage from './Component/PageComponent/HomePage/HomePage'

import TestPage from './Component/PageComponent/TestPage/TestPage'

import { useState, createContext } from "react"
export const BackgroundMusicContext = createContext()

function App() {
  const [isCovered, setCovered] = useState(false)
  const [isBegan, setBegan] = useState(false)
  const [BGM, setBGM] = useState("")

  return (
    <BackgroundMusicContext.Provider value={{BGM: BGM, setBGM: setBGM}}>    
      <AnimateRoute isBegan={isBegan} setCovered={setCovered}/>
      <BGMPlayer/>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="rule" element={<RulePage />} />
          <Route path="game/:gametype" element={<GamePage />} />

          <Route path="test" element={<TestPage />} />

          <Route path="*" element={<Navigate replace to='/home' />} />
        </Routes>
      </BrowserRouter>
    </BackgroundMusicContext.Provider>

  );
}

export default App;
