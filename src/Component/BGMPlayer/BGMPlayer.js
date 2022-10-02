// Resources
import Knucklebones_mp3 from "./Knucklebones.mp3"

// React
import { useEffect, useRef } from "react"

const BMGPlayer = () => {
    const audioRef = useRef()
    useEffect(() => {
        audioRef.current.load();
        audioRef.current.play();
    }, [])

    return (             
    <audio autoPlay ref={audioRef} >
        <source src={Knucklebones_mp3} type="audio/mp3" />
        Your browser does not support the audio element.
    </audio> );
}
 
export default BMGPlayer;