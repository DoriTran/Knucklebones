// Resources
import Knucklebones_mp3 from "./Knucklebones.mp3"

// React
import { useEffect, useRef } from "react"

const BMGPlayer = () => {
    const audioRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (audioRef.current && !audioRef.current.contains(event.target)) {
                audioRef.current.play();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [audioRef]);

    return (             
    <audio ref={audioRef} loop>
        <source src={Knucklebones_mp3} type="audio/mp3" />
        Your browser does not support the audio element.
    </audio> );
}
 
export default BMGPlayer;