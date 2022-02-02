import React, { Component } from 'react'

class Winner extends Component{

render(){
    return(
      <>
        <div className="winner"
        onClick={this.props.checkForWinner} ></div>
      </>
    )
  }
}
export default Winner
