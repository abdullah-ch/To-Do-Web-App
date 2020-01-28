import React from "react";
import ReactDOM from "react-dom";
//import Conditional from "./components/Conditional";
import App from "./App";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: false
//     };
//     this.changinLoging = this.changinLoging.bind(this);
//   }

//   changinLoging() {
//     this.setState(prevState => {
//       return {
//         ...prevState,
//         isLoading: !prevState.isLoading
//       };
//     });
//   }

//   render() {
//     console.log(this.state.isLoading);
//     let buttonMessage = this.state.isLoading ? "Log Out" : "Log In"
//     return (
//       <div>
//         <Conditional accessObj={this.state.isLoading} />
//         <button type="button" onClick={this.changinLoging}>
//           {" "}
//           {buttonMessage}
//         </button>
//       </div>
//     );
//   }
// }
ReactDOM.render(<App />, document.getElementById("root"));
