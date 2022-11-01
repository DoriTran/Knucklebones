// SCSS import
import "./GamePage.scss"

// Component
import GameBackground from "./GameBackground/GameBackground"

// React libraries
import { useParams } from "react-router-dom";

const GamePage = () => {
    const { gametype } = useParams()

    return ( 
    <>
        <GameBackground/>
    </> );
}
 
export default GamePage;