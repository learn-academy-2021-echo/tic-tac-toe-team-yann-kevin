import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [ "", "", "" , "", "", "", "", "", ""],
      currentValue: '',
    }
  }

  checkForWinner = () => {
    let {squares} = this.state

    let combos = (squares[0] + squares[1] + squares[2]) || (squares[3] + squares[4] + squares[5]) || (squares[6] + squares[7] + squares[8]) || (squares[0] + squares[3] + squares[6]) || (squares[1] + squares[4] + squares[7]) || (squares[2] + squares[5] + squares[8]) || (squares[0] + squares[4] + squares[8]) || (squares[2] + squares[4] + squares[6])

    console.log(combos);

    if (combos === 'XXX')  {
      alert('Xs Win!');
    }

    if (combos === 'OOO') {
      alert('Os Win!');
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

  render(){

    return(
      <>

        <h1>Tic Tac Toe</h1>
        <div className='gameboard'>

          {this.state.squares.map((value,index) => {
            return (
              <Square
               value={value}
               key={index}
               index={index}
               handleGamePlay={this.handleGamePlay}
               handleClick={this.handleClick}
               checkForWinner={this.checkForWinner}
               />

            )
            })}
        </div>
      </>
    )
  }
}
export default App
