import React, { Component } from 'react';
class LI extends Component{
  render(){
     return (
      <li>
        <span>{this.props.num}</span>
        <p>{this.props.tet}</p>
      </li>
    )
  }
}
export default LI;