import React from "react";
import MyToDoApp from "./components/MyToDoApp";
import todosData from "./components/todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoObjects: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedToDoArray = prevState.todoObjects.map(newObject => {
        
        if (newObject.id === id) {
          return {
            ...newObject, completed : !newObject.completed
          } 
        }
        return (newObject)
      })
      console.log(prevState.newObject)
      console.log(updatedToDoArray)
      return {
        todoObjects : updatedToDoArray
      }
    })

    
    

  }

  render() {
    const todosArray = this.state.todoObjects.map(object => (
      <MyToDoApp key={object.id} todoObject={object} Change = {this.handleChange} />
    ));

    return <div className="todo-list">{todosArray}</div>;
  }
}

export default App;
