import React, { Component } from 'react';
import LI from './li';
class Todo extends Component{
    constructor(){
        super();
        this.state={
            val:'',
            arr:['我是1','我是2','我是3']
        }
    }
    changrval=(ev)=>{
        this.setState({
            val:ev.target.value
        })
    }
    keyup=(ev)=>{
        if(ev.keyCode==13){
            let {arr}=this.state;
            let arr2=Object.assign(arr)
            arr2.push(ev.target.value)
            this.setState({
                arr:arr2
            })
        }
    }
    render() {
        let {arr}=this.state;
        let arr2=null;
        arr2=arr.map((e,i)=>{
            let data={
                key:i,
                tet:e,
                num:i
            }
            return <LI {...data}/>
        })
        return (
            <div>
                <input onChange={this.changrval}  onKeyUp={this.keyup} type="text" value={this.state.val}/>
                <ul>
                    {arr2}
                </ul>
                <span>{this.state.val}</span>
            </div>
        );
    }
}
export default Todo