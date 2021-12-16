import React from "react";

class Sum  extends React.Component{
    constructor(){
        super();
        this.state={
            Number1:0,
            Number2:0,
            sum:0
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    Add=()=>{
        console.log(this.state.Number1);
        console.log(this.state.Number2);
    }
    render(){
        return (
            <div >
                <input type="text" name="Number1" value={this.state.Number1} onChange={this.handleUserInput} />
                <input type="text" name="Number2" value={this.state.Number2} onChange={this.handleUserInput} />
                <input type="button" value="SUM" onClick={this.Add}/>
            </div>
        );
    }
}

export default Sum;