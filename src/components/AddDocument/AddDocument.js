import React from 'react';

class AddDocument extends React.Component{
    constructor(props){
        super(props)
    }
    handleChange= (e)=> {
        this.newData = {listName:e.target.value, date: '', isComplete: false};
        this.setState({listName:e.target.value, date: '', isComplete: false});
    }
    render(){
        return(
            <div>
                <form>
                <div className="card-header">
                <div className="form-group row">
                    <input name="listName" type="text" className="form-control col col-md-6" onChange={this.handleChange} />
                    <button type="button" onClick={() => this.props.addList(this.newData)} className="btn btn-primary">Add</button>
                    {/* <button type="button" onClick={this.clearList} className="btn btn-primary">Clear</button> */}
                </div>
                </div>
                </form>
            </div>
        )
    }
}

export default AddDocument;