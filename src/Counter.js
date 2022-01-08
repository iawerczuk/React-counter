import React, { useState } from 'react'

function Counter() {
    const [state, setState]=useState ({ count:0 });
    const decrease =() => {
        setState({ count: state.count -1})
    }
    const increase =() =>{
        setState({count:state.count+1})
    }
    return (
        <div className='counter-app'>
            <button onClick={decrease}>-</button>
            <h1>{state.count}</h1>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default Counter;
