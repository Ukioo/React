import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LI from './comm/li';
import INPUTS from './comm/inputs';
class UL extends Component {
  constructor(){
    super();
    this.state={
      arr:['我','是','谁']
    }
  }
  click=()=>{
    let {arr} =this.state;
    let arr3=Object.assign(arr);
    arr3.push('呵呵');
    this.setState({
      arr:arr3
    })
  }
  render() {
    let {arr}=this.state;
    let list =null;
    list=arr.map((e,i)=>{
      //  let data={
      //     num:i,
      //     tet:e,
      //     key:i
      //   }
        return <li key={i}>{e}</li>
        // return <LI {...data} />
    })  
      return(
        <div>
          <button onClick={this.click}>按钮</button>
          <ul>{list}</ul>
        </div>
      )
      }
    
  }


export default UL;
