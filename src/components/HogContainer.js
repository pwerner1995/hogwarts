import React, { Component } from 'react';
import '../App.css';
import Hog from './Hog'


class HogContainer extends Component {
    
    renderHogs = () => {  
        let id = 0
        const allHogs = this.props.hogs.map(hog => {
              return <Hog key = {id++} name = {hog.name} specialty = {hog.specialty} greased = {hog.greased} weight = {hog.weight} highestMedal = {hog["highest medal achieved"]}/>
          })
          return allHogs
    }

    render() {
      return (
        <center style ={{paddingLeft: "75px"}}>

        <div className="ui grid container">
            
            {this.renderHogs()}
        </div>
        </center>
        
      )
    }
  }

  export default HogContainer