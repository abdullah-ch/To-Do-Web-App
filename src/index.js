import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       number: 0
//     };
//     this.handleClickIncrement = this.handleClickIncrement.bind(this);
//     this.handleClickDecrement = this.handleClickDecrement.bind(this);
//   }
//   handleClickIncrement() {
//     this.setState(prevState => {
//       return {
//         number: prevState.number + 1
//       };
//     });
//   }

//   handleClickDecrement() {
//     this.setState(prevState => {
//       return {
//         number: prevState.number - 1
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1> {this.state.number}</h1>
//         <button onClick={this.handleClickIncrement}> Add</button>
//         <button onClick={this.handleClickDecrement}>Subtract</button>
//       </div>
//     );
//   }
// }
ReactDOM.render(<App />, document.getElementById("root"));
