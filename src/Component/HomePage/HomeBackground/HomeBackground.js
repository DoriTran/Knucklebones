// Resources
import video from './HomeBackVideo.mp4'

// SCSS settings
import "./HomeBackground.scss"

// React
import { useRef, useEffect } from 'react'

const HomeBackground = () => {
    const videoRef = useRef(null)

    useEffect(() => {

    }, []);

    return ( 
    <video className="home-background" ref={videoRef} autoPlay loop muted>
        <source src={video} type="video/mp4"/>
    </video> );
}
 
export default HomeBackground;