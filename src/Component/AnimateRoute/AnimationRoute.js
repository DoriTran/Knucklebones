// Resources
import TransitionBlackFire from './TransitionBlackFire.gif'

// React
import { useRef } from 'react'

// React libraries
import { CSSTransition } from 'react-transition-group';

// SCSS import
import './AnimationRoute.scss'

const AnimateRoute = (props) => {
    const animateRef = useRef(null)

    return ( 
    <>
        <CSSTransition
            in={props.isBegan}
            nodeRef={animateRef}
            timeout={500}
            classNames="animate-route-transition"
            unmountOnExit

            onEntered={() => props.setCovered(true) }
            onExit={() => props.setCovered(false)}
        >
            <div className="animate-container" ref={animateRef}>
                <div className="animate-black-screen"></div>
                <div style={{ backgroundImage: `url(${TransitionBlackFire})` }} className="animate-black-fire"></div>
            </div>            
        </CSSTransition>
    </> );
}
 
export default AnimateRoute;