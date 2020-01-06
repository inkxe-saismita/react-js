import React from 'react';

class CompleteDocument extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <table className="row">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>{this.props.listName}</td>
                            <td>{this.props.date}</td>
                            <td>
                                <button className="button muted-button">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CompleteDocument
