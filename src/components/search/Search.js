import React, { Component } from 'react';

class Search extends Component{
    state = {
        value: ''
    }
    handleChange = (evnt) => {
        this.setState({
            value: evnt.target.value
        });
    }
    render(){
        return (
            <div className="app-search">
                <input value={this.state.value} onChange={this.handleChange} />
                <button onClick={() => {
                    this.props.onSearch(this.state.value);
                }}>
                    Search
                </button>     
            </div>
        )
    }
} 

export default Search;