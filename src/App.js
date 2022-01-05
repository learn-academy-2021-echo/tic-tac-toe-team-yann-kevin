import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [ "","" ,"" ,"" ,"" , "", "", "", ""]
    }
  }
handleGamePlay = (index) => {
const { squares } = this.state
if (index % 2 === 0) {
  squares[index] = "X"
  this.setState({squares: squares})
} else if (index % 2 ===1){
  squares[index] = "O"
  this.setState({squares: squares})
}
}

  render(){

    return(
      <>

        <h1>Tic Tac Toe</h1>
        <div className= "gameboard">
          {this.state.squares.map((value,index ) => {
            return (
              <Square
               value={value}
               key={index}
               index={index}
               handleGamePlay={this.handleGamePlay}
               />

            )
            })}
        </div>
      </>
    )
  }
}
export default App
