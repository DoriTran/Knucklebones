// import { Animate } from 'react-move'
// import { easeExpOut } from 'd3-ease'
// import { useEffect, useState } from 'react'

// const trackStyles = {
//   borderRadius: 4,
//   backgroundColor: 'rgba(255, 255, 255, 0.7)',
//   position: 'relative',
//   margin: '5px 3px 10px',
//   width: 250,
//   height: 50,
// }

// const TestPage = () => {
//   const [state, setState] = useState({
//     open: false,
//   })

//   const handleClick = () => {
//     setState({ open: !state.open })
//   }

//     return (
//       <div>
//         <button
//           onClick={handleClick}
//         >
//           Toggle
//         </button>
//         <Animate
//           start={() => ({
//             x: 0,
//             y: 0
//           })}

//           update={() => ({
//             x: [state.open ? 200 : 0],
//             y: 0,
//             timing: { duration: 750, ease: easeExpOut },
//           })}
//         >
//           {(data) => {
//             const { x, y } = data
//             console.log(data)

//             return (
//               <div style={trackStyles}>
//                 <div
//                   style={{
//                     position: 'absolute',
//                     width: 50,
//                     height: 50,
//                     borderRadius: 4,
//                     opacity: 0.7,
//                     backgroundColor: '#ff69b4',
//                     WebkitTransform: `translate3d(${x}px, 0, 0)`,
//                     transform: `translate3d(${x}px, 0, 0)`,
//                   }}
//                 />
//               </div>
//             )
//           }}
//         </Animate>
//       </div>
//     )
// }

// export default TestPage

// import "./TestPage.scss"
// import { Button,TextField } from "@mui/material"
// import { useState } from "react"
// import { Animate } from "react-move";
// import { easeExpOut, easeLinear } from "d3-ease";

// const TestPage = () => {
//   const [position, sePosition] = useState({x: 0, y: 0})
//   const [next, setNext] = useState({x: 0, y: 0})

//   return (
//     <>
//       <div className="data-container">
//         <div>x = {position.x}</div>
//         <div>y = {position.y}</div> 
//       </div>
//       <div className="control-container">
//         <TextField label="x" variant="outlined" className="control-input" value={next.x} 
//           onChange={event => setNext({x: event.target.value, y: next.y})}/>
//         <TextField label="y" variant="outlined" className="control-input" value={next.y}
//           onChange={event => setNext({x: next.x, y: event.target.value})}/>
//         <Button variant="contained" className="control-btn" onClick={() => sePosition(next)}>Go</Button>
//       </div>

//       <div className="test-container">
//         <div className="test-wrapper">
//           <Animate
//             start={position}
//             update={{
//               x: [position.x],
//               y: [position.y],
//               timing: { duration: 1000, ease: easeLinear}
//             }}
//             >
//               {(data) => 
//                 {
//                   console.log(data)
//                   return <div className="test-element" style={{
//                       WebkitTransform: `translate3d(${data.x}px, ${data.y}px, 0)`,
//                       transform: `translate3d(${data.x}px, ${data.y}px, 0)`,
//                     }}
//                   ></div> 
//                 }
//               }
//             </Animate>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TestPage;

import MoveAnimation from "../../../Animation/MoveAnimation/MoveAnimation"
import ZoomAnimation from "../../../Animation/ZoomAnimation/ZoomAnimation"
import "./TestPage.scss"
import { Button, TextField } from "@mui/material"
import { useState, useMemo } from "react"
import { easeExpOut } from "d3-ease";

const DataInput = (props) => {
  const [nextPosition, setNextPosition] = useState({ x: 0, y: 0 })
  const [nextScale, setNextScale] = useState({ scale: 1 })

  return (<>
    <div className="control-container">
      <TextField label="x" variant="outlined" className="control-input" value={nextPosition.x}
        onChange={event => setNextPosition({ x: parseInt(event.target.value) , y: nextPosition.y })} />
      <TextField label="y" variant="outlined" className="control-input" value={nextPosition.y}
        onChange={event => setNextPosition({ y: parseInt(event.target.value), x: nextPosition.x })} />
      <TextField label="scale" variant="outlined" className="control-input" value={nextScale.scale}
        onChange={event => setNextScale({ scale: parseInt(event.target.value)  })} />
      <Button variant="contained" className="control-btn" onClick={() => {
        props.setScale(nextScale)
        props.setPosition(nextPosition)
      }
      }>Go</Button>
    </div>
  </>)
}

const TestPage = () => {
  const [position, setPosition] = useState({x: 0, y: 0})
  const [scale, setScale] = useState({ scale: 1 })

  return (
    <>
      <DataInput position={position} setPosition={setPosition} scale={scale} setScale={setScale} />

      <div className="test-container">
        <div className="test-wrapper">
          {/* <MoveAnimation position={position} duration={1000}> */}
            <ZoomAnimation scale={scale} duration={1000}>
              <div className="test-element"></div>
            </ZoomAnimation>
          {/* </MoveAnimation> */}
        </div>
      </div>
    </>
  );
}

export default TestPage;