import React, { Component } from 'react';
class INPUTS extends Component{
    constructor () {
        super();
        this.state={
            val:''
        }
    }
    changeval=(ev)=>{
        this.setState({
            val:ev.target.value
        })
        console.log(ev.target.value)
    }
    render() {
        return (
            <div>
                <input value={this.state.val} type="text" onChange={this.changeval}/>
            </div>
        );
    }
}
export default INPUTS