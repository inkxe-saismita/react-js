import React from 'react';

class ListDocument extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        {/* <th></th> */}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="col col-md-4">{this.props.listName}</td>
                        {/* <td className="col col-md-4">{this.props.date}</td> */}
                        <td className="col col-md-8">
                            <button className="btn btn-success" onClick={() => this.props.completeList(this.props, this.props.index_key)}>Complete</button>
                            <button className="btn btn-info" onClick={() => this.props.editList(this.props,this.props.index_key)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => this.props.deleteList(this.props.index_key)}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }


}

export default ListDocument