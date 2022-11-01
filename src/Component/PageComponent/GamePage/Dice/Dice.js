// SCSS import
import "./Dice.scss";

// Resources
import useDice from "./useDice"

const Dice = (props) => {
    const dice = useDice()

    return ( 
        <img className="dice" src={dice[props.number][props.type]}/>
    );
}
 
export default Dice;