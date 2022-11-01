// Resources
import SquareBackground from "./Square.png"

// SASS
import "./OptionSquare.scss"

const OptionSquare = (props) => {
    return ( 
    <div className="option-square" style={{ backgroundImage: `url(${SquareBackground})` }}
        onMouseEnter={props.onMouseEnter} onClick={props.onClick}>
        <div className="option-square-title">{props.title}</div>
        <div className="option-square-subtitle">{props.subtitle}</div>
        <div className="option-square-description">{props.description}</div>
    </div> );
}
 
export default OptionSquare;