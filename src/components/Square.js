import React from 'react'
import './Square.css'

/////////////// 함수형 컴포넌트 ///////////////
// const Square = (props) => {
//     return (
//       <button className='square' 
//         onClick={() => { props.onClick() }}>
//         {props.value}
//       </button>
//     )
// }
// export default Square

/////////////// 함수형 컴포넌트 - 디스트럭쳐링 방식 ///////////////
const Square = ({ onClick, value }) => {
  return (
    <button className='square' 
      onClick={ onClick }>
      {value}
    </button>
  )
}
export default Square;


/////////////// 클래스형 컴포넌트 ///////////////
// export default class Square extends Component {

//   render() {
//     return (
//       <button className='square' 
//         onClick={() => { this.props.onClick() }}>
//         {this.props.value}
//       </button>
//     )
//   }
// }
