import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const CreateForm = props => {
    const initialFormState = { id: null, name: '', date: new Date() }
    const [list, setUser] = useState(initialFormState);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...list, [name]: value })
      }
     const addList = list => {
        if (!list.name) return;
        setUser(initialFormState);
      }
     const clearList = list => {
         list.name = '';
         setUser(initialFormState);
     }
    return (
        <div>
        <form onSubmit={event => event.preventDefault()}>
            <div className="row">
                <div className='col col-md-12'>
                <input type="text" name="name" value={list.name} onChange={handleInputChange} placeholder="Add new task..." autoComplete="off"/>
                <button onClick={() => props.addList(list)}>+</button>
                <button onClick={() => clearList(list)}>clear</button>
                </div>
            </div>
        </form>
        </div>
    );
}

export default CreateForm;
