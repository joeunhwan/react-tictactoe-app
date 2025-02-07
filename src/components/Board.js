// import React, { useState } from 'react' // 함수형클래스에서의 사용
// import React, { Component, useState } from 'react' // 클래스형에서만 씀
import Square from './Square'
import './Board.css'

/////////////// 함수형 컴포넌트 ///////////////
const Board = ({squares,onClick}) => {
    const renderSquare = (i) => {
        return (
            <Square value={squares[i]} onClick={()=> onClick(i)}></Square>
        )
    }


    return (
        <div className='boadr-wrapper'>            
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}
export default Board;





/////////////// 클래스형 컴포넌트 ///////////////

// export default class Board extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//           squares: Array(9).fill(null)
//         }
//     }

//     handleClick(i){
//         const squares = this.state.squares.slice();
//         squares[i] = 'X';
//         this.setState({ squares : squares });
//     }

//     renderSquare(i){
//         return <Square value={this.state.squares[i]} onClick={()=> this.handleClick(i)}></Square>
//     }

//     render() {
//         return (
//         <div>
//             <div className='status'>Next Player : X , O</div>
//             <div className='board-row'>
//                 {this.renderSquare(0)}
//                 {this.renderSquare(1)}
//                 {this.renderSquare(2)}
//             </div>
//             <div className='board-row'>
//                 {this.renderSquare(3)}
//                 {this.renderSquare(4)}
//                 {this.renderSquare(5)}
//             </div>
//             <div className='board-row'>
//                 {this.renderSquare(6)}
//                 {this.renderSquare(7)}
//                 {this.renderSquare(8)}
//             </div>
//         </div>
//         )
//     }
// }
