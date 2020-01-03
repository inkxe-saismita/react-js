import React, { useState } from 'react';
import CreateForm  from './createForm/CreateForm'
import ViewForm  from './viewForm/ViewForm'
import './App.css';

const App = () => {
  const usersData = []
  const [lists, setUsers] = useState(usersData);
  const addList = list => {
    console.log(list);
    list.id = lists.length + 1
    setUsers([...lists, list])
    
  }
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', date: new Date() }
  const [currentUser, setCurrentUser] = useState(initialFormState)


  const editRow = user => {
    setEditing(true)
    console.log(user)
    setCurrentUser({ id: user.id, name: user.name, date: new Date() })
  }
  
  return (
    <div className="container">
      <h1>ToDo list</h1>
      <div className="flex-row">
        <div className="flex-large">
          <CreateForm addList={addList}/>
        </div>
        <div className="flex-large">
  <h2>Task-to-do {lists.length}</h2>
          <ViewForm lists={lists} editRow={editRow}/>
        </div>
      </div>
    </div>
  )
}


export default App;
