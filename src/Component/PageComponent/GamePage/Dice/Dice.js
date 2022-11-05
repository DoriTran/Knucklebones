// SCSS import
import "./Dice.scss";

// Resources
import useDice from "./useDice"

const Dice = (props) => {
    const dice = useDice()

    return (
        <MoveAnimation position={props.position} duration={1000}>
            <ZoomAnimation scale={props.scale} duration={1000}>
                <img className="dice" src={dice[props.number][props.type]} />
            </ZoomAnimation>
        </MoveAnimation>
    );
}

export default Dice;