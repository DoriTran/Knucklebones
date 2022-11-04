import { Animate } from "react-move";
import { easeExpOut } from "d3-ease";
import { cloneElement } from 'react';

const ZoomAnimation = (props) => {
    return ( 
        <Animate
            show={props.show}
            start={props.scale}
            update={{
                scale: [props.scale.scale],
                timing: { 
                    duration: props.duration, 
                    ease: props.ease === undefined ? easeExpOut : props.ease 
                }
            }}
        >
            {(data) => {
                return cloneElement(props.children, {
                    style: { 
                        WebkitTransform: `scale(${data.scale})`,
                        transform: `scale(${data.scale})`
                    }
                })
            }}
        </Animate>
    );
}
 
export default ZoomAnimation;