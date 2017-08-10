import React, { Component } from 'react';
class Ctop extends Component{
    constructor(){
        super();
        this.state={
            arr:[
                {tet:'我是第一',checked:false,id:1},
                {tet:'我是第二',checked:false,id:2},
                {tet:'我是第三',checked:false,id:3},
                {tet:'我是第四',checked:false,id:4}
            ]
        }
    }
    changeChild=(id)=>{
        let {arr}=this.state;
        let arr2=Object.assign(arr)
        arr.forEach((e,i)=>{
            if(e.id==id){
                e.checked=!e.checked;
            }
        })
        this.setState({
            arr:arr2
        })
    }
    render(){
    
    let {arr} = this.state;
    let list = null;

    list = arr.map((e,i)=>{
      let data = {
        txt:e.tet,
        num:i,
        key:i,
        id:e.id,
        checked:e.checked,
        changeChild:this.changeChild
      }
      return <Li {...data}/>
    });
        return (
        <ul>{list}</ul>
        )
     }
    };
    
class Li extends Component{
    change=()=>{
        this.props.changeChild(this.props.id);
    }
    render() {
        return (
           <li>
            <input
            type="checkbox"
            checked={this.props.checked}
            onChange={this.change}
            />
            <p>{this.props.txt}</p>
         </li>
        );
    }
}
export default Ctop