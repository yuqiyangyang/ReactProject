import React, { Component } from 'react'

class CreateProject extends Component {
    state ={
        title: '',
        content: ''
    }

    handleChange =(e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit =(e) =>{
        e.preventDefault();
        console.log(this.state);
}

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="imput-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="imput-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-taxtarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>     
            </div>
        )
    }
}

export default CreateProject