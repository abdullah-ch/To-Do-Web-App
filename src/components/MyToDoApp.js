import React from "react";
import "./style.css";

class MyToDoApp extends React.Component {


  
  render() {
    const Style = {
      fontFamily: "italic" ,
      color: "gray", 
      textDecoration : "line-through"
    }
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.todoObject.completed}
          onChange={ () => this.props.Change(this.props.todoObject.id)}
        />
        <h1 style = {this.props.bool ? Style : null } > {this.props.todoObject.text}</h1>
      </div>
    );
  }
}

export default MyToDoApp;
