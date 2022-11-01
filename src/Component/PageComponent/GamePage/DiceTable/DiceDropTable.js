// SCSS import
import "./DiceDropTable.scss"

// Resources
import GreenTable from "./DiceRect-Green.png"
import YellowTable from "./DiceRect-Yellow.png"

const DiceDropTable = (props) => {
    return (
        <img src={{backgroundImage: props.color === "green" ? GreenTable : YellowTable}} className="dice-drop-table"/>
    );
}
 
export default DiceDropTable;