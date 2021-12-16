import React from "react";

class Sum  extends React.Component{
    constructor(){
        super();
        this.state={
            Number1:0,
            Number2:0,
            Sum:0
        }
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    Add=()=>{
        var _sum=Number(this.state.Number1)+Number(this.state.Number2)
       this.setState({Sum:_sum})
    }
    render(){
        const {number1,number2}=this.state;
        return (
            <div >
                <input type="text" name="Number1" value={this.state.Number1} onChange={this.handleUserInput} />
                <input type="text" name="Number2" value={this.state.Number2} onChange={this.handleUserInput} />
                <input type="button" value="SUM" onClick={this.Add}/>

                <div>{this.state.Sum}</div>
            </div>
        );
    }
}

export default Sum;