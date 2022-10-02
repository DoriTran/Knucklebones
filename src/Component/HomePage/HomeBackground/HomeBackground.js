// Resources
import eyeGif from './Eye.gif'
import noeyeGif from './NoEye.gif'
import sloganGif from './Slogan.gif'
import threeDices from './ThreeDices.png'
import spinBones from './SpinBones.png'
import homeButton from './HomeButton.png'

// SCSS settings
import "./HomeBackground.scss"

// Material ui
import Button from '@mui/material/Button';

// React
import { useState } from 'react'

const HomeBackground = () => {
    const [isFirstClicked, setClicked] = useState(false)

    const [onHover, setHover] = useState(1)

    const hoverCSSbutton = {backgroundImage: `url(${homeButton})`, color: '#f5ecd3'}
    const unhoverCSSbutton = {color: '#5a5a5a'}

    return (
        <div className="home-background" onClick={() => setClicked(true)}>
            <div className="home-center">
                <img className="home-three-dices" src={threeDices} alt=''/>
                <div className="home-title">KNUCKLEBONES</div>
                <img className={isFirstClicked ? "home-spin-bones" : "home-bones"} src={spinBones} alt=''/>
                <img className="home-three-dices button-home-spacing" src={sloganGif} alt=''/>
                <Button className="ribbon-button" 
                    style={onHover === 1 ? hoverCSSbutton : unhoverCSSbutton} 
                    onMouseEnter={() => setHover(1)}>Play</Button>
                <Button className="ribbon-button" 
                    style={onHover === 2 ? hoverCSSbutton : unhoverCSSbutton} 
                    onMouseEnter={() => setHover(2)}>Find room</Button>
                <Button className="ribbon-button" 
                    style={onHover === 3 ? hoverCSSbutton : unhoverCSSbutton} 
                    onMouseEnter={() => setHover(3)}>How to play</Button>
            </div>

            <img className="homegif-topleft" src={eyeGif} alt=""/>
            <img className="homegif-topright" src={noeyeGif} alt=""/>
            <img className="homegif-botleft" src={noeyeGif} alt=""/>
            <img className="homegif-botright" src={eyeGif} alt=""/>
        </div>
 );
}
 
export default HomeBackground;