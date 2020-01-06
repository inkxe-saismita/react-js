import React from 'react'

const ViewForm = props => (
  <table>
    <thead>
      <tr>
        
      </tr>
    </thead>
    <tbody>
    {props.lists.length > 0 ? (
        props.lists.map(user => (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.date[0]}</td>
        <td>
          <button onClick={() => {
    props.editRow(user)
  }} className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
        ))
    ) : (
        <tr>
          <td colSpan={3}>No list</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ViewForm