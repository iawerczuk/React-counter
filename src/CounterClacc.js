import React, { Component } from 'react'

export default class CounterClass extends Component {
constructor(){
    super()
    this.state={
        count:0
    };
}
decrease=() =>{
    const presentCount=this.state.count;
    this.setState({count:presentCount -1 }, () => {
        console.log("Pomniejszono o 1");
    });
}
increase=() =>{
    const presentCount=this.state.count;
    this.setState({count:presentCount + 1}, () => {
        console.log("Powiększono o 1");
    })
}

    render() {
        return (
            <div style={{display:"flex", justifyContent:"center"}}>
                <button onClick={this.decrease}>-</button>
                <span style={{padding:"20px", fontSize:"24px"}}>{this.state.count}</span>
                <button onClick={this.increase}>+</button>

            </div>
        )
    }
}
