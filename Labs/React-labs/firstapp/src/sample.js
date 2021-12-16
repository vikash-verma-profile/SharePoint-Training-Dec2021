import React from 'react';

class Sample extends React.Component{
    constructor(){
        super();
        this.state={variable:"Hello i am state variable"};
    }
    render(){
        return (
            <div>Hi

                {this.state.variable}
            </div>
        );
    }
}
export default Sample;