import React, { Component } from 'react'

class Square extends Component{

handleclick = () => {
  this.props.handleGamePlay(this.props.index)
}




  render(){
    return(
      <>
        <div className="square"
        onClick= {this.handleclick}>{this.props.value}</div>
      </>
    )
  }
}
export default Square
