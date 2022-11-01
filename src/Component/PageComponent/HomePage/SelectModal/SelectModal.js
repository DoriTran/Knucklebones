// Resources
import FireBackground from './FireBackground.gif'
import HoverSound from '../SoundEffect/Hover.mp3'
import EnteringSound from '../SoundEffect/Entering.mp3'

// SCSS settings
import './SelectModal.scss'

// React
import { useRef, useState } from "react"

// React library
import useSound from "use-sound"
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

// Component
import OptionSquare from "../OptionSquare/OptionSquare"

const SelectModal = (props) => {
    const [playHover] = useSound(HoverSound, { volume: 0.5 })
    const [playEntering] = useSound(EnteringSound, { volume: 0.5 })

    const animationRef = useRef(null)
    const [isEntered, setEntered] = useState(true)

    const navigate = useNavigate()

    return (
        <>
            <CSSTransition
                in={props.isInAnimation}
                nodeRef={animationRef}
                timeout={200}
                classNames="modal-red-backdrop-animation"
                unmountOnExit

                onEntered={() => setEntered(true)}
                onExit={() => setEntered(false)}
            >
                <div className="transparent-red-backdrop-modal" onClick={() => props.onDropBackClick()} ref={animationRef}>
                    <div style={{ backgroundImage: `url(${FireBackground})` }} className="top-fire-gif"></div>
                    <div className="selectboard-options">
                        {
                            isEntered &&
                            <>
                                <OptionSquare title="Single" subtitle="Original Game Play" description="1 VS 1 in one device"
                                    onClick={event => { playEntering(); event.stopPropagation(); navigate("/game/solo") }}
                                    onMouseEnter={playHover} />                                    
                                <OptionSquare title="Dual" subtitle="Solo Game Play" description="1 VS 1 in different devices"
                                    onClick={event => { playEntering(); event.stopPropagation(); navigate("/game/dual") }}
                                    onMouseEnter={playHover} />                                    
                            </>
                        }
                    </div>
                    <div style={{ backgroundImage: `url(${FireBackground})` }} className="bot-fire-gif"></div>  
                </div>
            </CSSTransition>


        </>

    )
}

export default SelectModal