// SCSS import
import "./GameBoard.scss"

// Import component
import DiceBoard from "./DiceBoard/DiceBoard"

const GameBoard = () => {
    return ( 
        <div className="fullscreen-background-yellow">
            <DiceBoard/>
            <DiceBoard/>
        </div>
    );
}
 
export default GameBoard;