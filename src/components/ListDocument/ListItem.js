import React from 'react';

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state ={isEdit:false}
        // this.editList = this.editList.bind(this);
        // this.editListSubmit = this.editListSubmit.bind(this);
        // this.deleteList = this.deleteList.bind(this);
      }

      render() {
        const {name,date} = this.props.list;
        return (
          this.state.isEdit === true ? (
            <tr className="bg-warning" key={this.props.index}>
              <td>
                <input ref={nameInput => this.nameInput = nameInput} defaultValue ={name}/>
              </td>
              <td><input defaultValue={date} ref={dateInput => this.dateInput = dateInput}/>
              </td>
              <td><i className="far fa-save" onClick={this.editListSubmit}></i>
              </td>
              <td><i className="fas fa-trash"></i></td>
            </tr>
          ) : (
            <tr key={this.props.index}>
              <td>{name}</td>
              <td>{date}</td>
              <td><i className="far fa-edit" onClick={this.editList}></i></td>
              <td><i className="fas fa-trash" onClick={this.deleteList}></i></td>
    </tr>
          )
        );
      }
}
export default ListItem 