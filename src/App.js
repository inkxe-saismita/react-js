import React from 'react';
import AddDocument from './components/AddDocument/AddDocument';
import ListDocument from './components/ListDocument/ListDocument';
import CompleteDocument from './components/CompleteDocument/CompleteDocument';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      addData: '',
      toDoList: [
        {listName:'John Doe',date:'',isComplete:false},
        {listName:'Jane Doe',date:'',isComplete:false},  
        {listName:'Terry Adams',date:'',isComplete:false},
        {listName:'Jenny Smith',date:'',isComplete:false}
      ],
      completedList:[]
    }
    this.editList = this.editList.bind(this);
    this.completeList = this.completeList.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }

  /**
   * Add new list
   */
  addList = (newTodo) =>{
    if(newTodo !== undefined){
      let newList = this.state.toDoList;
      newList.push(newTodo);
      this.setState(() => ({
        toDoList:newList
      }));
    }
  }

  /**
   * Dispaly the list
   */
  displayList = () =>{
    return <div className="card-body">
      <h2>Task-to-do ({this.state.toDoList.length})</h2>
        {this.state.toDoList.length > 0 ? (
          this.state.toDoList.map((todos, index) => (
            <ListDocument index_key={index} key={index} listName={todos.listName} date={todos.date} isComplete={todos.isComplete} completeList={this.completeList} editList={this.editList} deleteList={this.deleteList}/>
          
      ))) : (
        <span> No List</span>
        )}
    </div>
  }

  /**
   * Complete list
   */
  completeList = (data, index) => {
    let completTodo = this.state.completedList;
    let toDos = this.state.toDoList;
    toDos.splice(index,1);
    data = {
      ...data,
      isComplete: !data.isComplete
    };
    completTodo.push(data);
    this.setState(() => ({
      completedList:completTodo
    }));
    this.completedToDoList()
  }

  /**
   * Edit todo list
   */
  editList = (data,index) => {
    console.log(data);
    return data;
  }

  /**
   * Delete list
   */
  deleteList=(index)=>{
    console.log(index);
    var confirmClick = window.confirm("Are you sure? You won't be able to revert this!");
    if (confirmClick === true) {
      let toDos = this.state.toDoList;
      toDos.splice(index,1);
      this.setState(() => ({
        toDoList:toDos
      }));
    }
  }

  completedToDoList = () => {
    return <div>
      <h2> Completed task ({this.state.completedList.length}) </h2>
      {this.state.completedList.length > 0 ? (
        this.state.completedList.map((cmpltdTsk, index) => (
          <CompleteDocument key={index} listName={cmpltdTsk.listName} date={cmpltdTsk.date} isComplete={cmpltdTsk.isComplete}/>
        ))) : (
          <span> No List</span>
        )}
      </div>
  }

  render(){
    return (
      <div className="container-fluid">
          <div className="row mt-3"><div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h2>toDo List</h2>
              </div>
              <AddDocument addList={this.addList}/>
              {this.displayList()}
              {this.completedToDoList()}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
