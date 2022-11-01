// Resources
import eyeGif from './Resources/Eye.gif'
import noeyeGif from './Resources/NoEye.gif'
import sloganGif from './Resources/Slogan.gif'
import threeDices from './Resources/ThreeDices.png'
import spinBones from './Resources/SpinBones.png'
import homeButton from './Resources/HomeButton.png'

import HoverSound from '../SoundEffect/Hover.mp3'
import ClickSound from '../SoundEffect/Click.mp3'

// SCSS settings
import "./HomeBackground.scss"

// Material ui
import Button from '@mui/material/Button';

// BGM Context
import { BackgroundMusicContext } from "../../../../App"

// React
import { useState, useContext } from 'react'

// React library
import useSound from 'use-sound'
import { useNavigate } from 'react-router-dom'

// Component

const HomeBackground = (props) => {
    // Navigate
    const navigate = useNavigate()

    // First clicked handler
    const [isFirstClicked, setFirstClicked] = useState(false)
    const checkClicked = () => {
        if (isFirstClicked) return
        setFirstClicked(true)
        BGMContext.setBGM("Home")
    }

    const [onHover, setHover] = useState(1)

    const hoverCSSbutton = {backgroundImage: `url(${homeButton})`, color: '#f5ecd3'}
    const unhoverCSSbutton = {color: '#5a5a5a'}

    // BGM Context
    const BGMContext = useContext(BackgroundMusicContext)

    // Sound effects
    const [playHover] = useSound(HoverSound, { volume: 0.5 })
    const [playClick] = useSound(ClickSound, { volume: 0.5 })

    return (
        <>
            <div className="home-background" onClick={checkClicked}>
                <div className="home-center">
                    <img className="home-three-dices" src={threeDices} alt='' onClick={() => navigate("/test")}/>
                    <div className="home-title">KNUCKLEBONES</div>
                    <img className={BGMContext.BGM !== "" ? "home-spin-bones home-bones" : "home-bones"} src={spinBones} alt=''
                        onClick={event => {
                            BGMContext.setBGM(BGMContext.BGM === "" ? "Home" : "")
                            event.stopPropagation()
                        }}/>
                    <img className="home-three-dices button-home-spacing" src={sloganGif} alt=''/>
                    <Button className="ribbon-button" 
                        style={onHover === 1 ? hoverCSSbutton : unhoverCSSbutton} 
                        onMouseEnter={() => { setHover(1); playHover(); } }
                        onClick={() => {props.setOpenSelectModal(true); playClick();} }>Play</Button>
                    <Button className="ribbon-button" 
                        style={onHover === 2 ? hoverCSSbutton : unhoverCSSbutton} 
                        onMouseEnter={() => { setHover(2); playHover(); }}
                        onClick={() => { playClick();} }>Find room</Button>
                    <Button className="ribbon-button" 
                        style={onHover === 3 ? hoverCSSbutton : unhoverCSSbutton} 
                        onMouseEnter={() => { setHover(3); playHover(); }}
                        onClick={() => { playClick();}}>How to play</Button>
                </div>

                <img className="homegif-topleft corner-maxmin" src={eyeGif} alt=""/>
                <img className="homegif-topright corner-maxmin" src={noeyeGif} alt=""/>
                <img className="homegif-botleft corner-maxmin" src={noeyeGif} alt=""/>
                <img className="homegif-botright corner-maxmin" src={eyeGif} alt=""/>
            </div>
        </>

 );
}
 
export default HomeBackground;