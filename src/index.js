// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { QueryClientProvider, QueryClient } from "react-query";

// const queryClient = new QueryClient()
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <App/>      
//     </QueryClientProvider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React, { PureComponent } from 'react'
import { render } from "react-dom";
import { Animate } from 'react-move'
import { easeExpOut } from 'd3-ease'

const trackStyles = {
  borderRadius: 4,
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  position: 'relative',
  margin: '5px 3px 10px',
  width: 250,
  height: 50,
}

class Example extends PureComponent {
  state = {
    open: false,
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
        >
          Toggle
        </button>
        <Animate
          start={() => ({
            x: 0,
          })}

          update={() => ({
            x: [this.state.open ? 200 : 0],
            timing: { duration: 750, ease: easeExpOut },
          })}
        >
          {(state) => {
            const { x } = state

            return (
              <div style={trackStyles}>
                <div
                  style={{
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    borderRadius: 4,
                    opacity: 0.7,
                    backgroundColor: '#ff69b4',
                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                    transform: `translate3d(${x}px, 0, 0)`,
                  }}
                />
              </div>
            )
          }}
        </Animate>
      </div>
    )
  }
}

export default Example
render(<Example />, document.getElementById("root"));