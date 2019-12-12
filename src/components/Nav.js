import piggy from '../porco.png'
import React from 'react'
import Sort from './Sort'


const Nav = (props) => {
	console.log(props)
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<br/>
			{props.isFiltered ? <button className="ui primary button" onClick = {props.handleUnfilter}>Unfilter</button> : <button className="ui primary button" onClick ={props.handleFilter} >Filter by Grease</button>}
			<br/>
			<Sort handleSort = {props.handleSort} />
		</div>
	)
}

export default Nav
