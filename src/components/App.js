import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {
	
	state = {
	hogs: [...hogs],
	isFiltered: false
	}


	handleFilter = () => {
		console.log(this.state.isFiltered)
		let greasedHogs = this.state.hogs.filter(hog =>{
			return hog.greased
		})
		debugger
		this.setState({
			hogs: greasedHogs,
			isFiltered: true

		})
	}

	handleUnfilter = () => {
		this.setState({
			hogs: [...hogs],
			isFiltered: false
		})
	}
  
	handleSort = (value) => {
		console.log(value)
		
		let sortedHogs = [...this.state.hogs]
		if (value === "name") {
			sortedHogs = this.state.hogs.sort((a,b) =>{
				if(a.name < b.name) { return -1; }
				if(a.name > b.name) { return 1; }
				return 0;
			})
		}
		if(value === "weight"){
			sortedHogs = this.state.hogs.sort((a,b) => b.weight-a.weight)
		}
		console.log(sortedHogs)
		this.setState({
			hogs: sortedHogs
		})
	}
	
	render() {
	const hogs = hogs
    return (
      <div className="App">
        < Nav isFiltered = {this.state.isFiltered} handleFilter = {this.handleFilter} handleUnfilter = {this.handleUnfilter} handleSort = {this.handleSort}/>
		<HogContainer hogs = {this.state.hogs}/>

		
      </div>
      
    )
  }
}

export default App;
