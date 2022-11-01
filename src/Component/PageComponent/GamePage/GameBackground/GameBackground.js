// SCSS import
import './GameBackground.scss'

// Resources
import TopEyesGif from '../Resources/EyesTop.gif'
import BotEyesGif from '../Resources/EyesBot.gif'
import FireGameBackground from '../Resources/FireGameBackground.gif'

const GameBackground = () => {
    return ( 
        <div className="game-background-container">
            <img className="top-eyes-gif" src={TopEyesGif}/>
            <img className="bot-eyes-gif" src={BotEyesGif}/>
            <div className="left-game-background-wrapper">
                <img className="left-fire-gamebackground" src={FireGameBackground}/>    
            </div>
            <div className="right-game-background-wrapper">
                <img className="right-fire-gamebackground" src={FireGameBackground}/>
            </div>
        </div>
    );
}
 
export default GameBackground;