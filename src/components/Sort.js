import React, { Component } from 'react';
import '../App.css';

class Sort extends Component{
    state = {
        value: "none"
    }

    handleOnChange = (e) => {
        this.setState({
            value: e.target.value
        })
        
    }

    handleSort = () => {
        this.props.handleSort(this.state.value)
    }

    render(){
        return(
            <label>
                <h3>Animal type</h3>
                <div className="field">
                <select name="type" id="type" onChange = {this.handleOnChange} value = {this.state.value}>
                    <option value="none">None</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
                </div>
                <div className="field">
                <button className="ui secondary button" onClick = {this.handleSort}>Sort Hogs</button>
                </div>
            </label>
        )
    }
}

export default Sort