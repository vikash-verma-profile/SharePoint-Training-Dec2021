import React from "react";

class OddEven  extends React.Component{
    constructor(){
        super();
        this.state={
            Number1:0,
            Message:''
        }
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    Check=()=>{
       if(Number(this.state.Number1)%2===0){
        this.setState({Message:"Its a even number."})
       }
       else{
        this.setState({Message:"Its a odd number."})
       }
       
    }
    render(){
        return (
            <div >
                <input type="text" name="Number1" value={this.state.Number1} onChange={this.handleUserInput} />
                <input type="button" value="Check" onClick={this.Check}/>

                <div>{this.state.Message}</div>
            </div>
        );
    }
}

export default OddEven;