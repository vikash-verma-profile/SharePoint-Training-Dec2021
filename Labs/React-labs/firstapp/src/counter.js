import React from "react";

class Counter  extends React.Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
    }

    Increment=()=>{
        this.setState({counter:this.state.counter+1});
    }
    Decrement=()=>{
        this.setState({counter:this.state.counter-1});
    }
    render(){
        return (
            <div >
                <button onClick={this.Increment}>Click to increment by 1</button>
                <button onClick={this.Decrement}>Click to Decrement by 1</button>
                <div>{this.state.counter}</div>
            </div>
        );
    }
}

export default Counter;