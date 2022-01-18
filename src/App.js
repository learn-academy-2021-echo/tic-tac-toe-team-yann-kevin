import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [ "", "", "" , "", "", "", "", "", ""],
      currentValue: '',
      Xwin: "XXX",
      Owin: "OOO",
    }
  }



handleGamePlay = (index) => {
const { squares, currentValue } = this.state
if (squares[index] !== '') {
  this.setState({squares: squares, currentValue: currentValue})
} else if (squares.join('') === '') {
  squares[index] = "X"
  this.setState({squares: squares, currentValue: 'X'})
} else if (currentValue === 'X') {
  squares[index] ='O'
  this.setState({squares: squares, currentValue: 'O'})
} else if (currentValue === 'O') {
  squares[index] ='X'
  this.setState({squares: squares, currentValue: 'X'})
}
}

const checkForWinner = (squares) => {
  let {squares, Xwin, Owin} = this.state
  let combos= 
  let xwinner =
   if (Xwin === squares[0] + squares[1] + squares [2])   
    
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
               handleClick={this.handleClick}
               />

            )
            })}
        </div>
      </>
    )
  }
}
export default App
