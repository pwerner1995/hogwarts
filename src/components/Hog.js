import React, { Component } from 'react';
import '../App.css';
import HogContainer from './HogContainer'


class Hog extends Component {
    state ={
        display: "none",
        float: "",
        buttonDisplay: ""
    }
    getImage = () => {
        let imgName = this.props.name
        imgName = imgName.split(" ")
        imgName = imgName.join("_")
        imgName = imgName.toLowerCase()
        // console.log(imgName)
        return require(`../hog-imgs/${imgName}.jpg`)
        
    }

    handlClick = (e) =>{
        console.log(e.target)
        e.target.style.display = "none"
        this.setState({
            display: "",
            float: "left"
        })
        this
    }

    hideDetails = () =>{
        this.setState({
            display: "none",
            float: "",
            buttonDisplay: "block"
        })
    }

    render() {
    //   console.log(this.props)
      return (
        <div className= "pigTile" style = {{border: "5px dashed black"}}>
                <div className = "ui eight wide column" style = {{float: this.state.float}}>

                <h3 id = "pigTile h3">{this.props.name}</h3>
                <img src ={this.getImage()} alt = "No image"/> 
                <br/>
                <center>

                    <button onClick = {this.handlClick} style = {{display: this.state.buttonDisplay}}>Show Details</button>
                </center>

                </div>
        
            <div style = {{display: this.state.display}}>
                <p>Specialty: {this.props.specialty}</p>
                {this.props.greased ? <p>Greased</p> : <p>Not Greased</p>}
                <p>Weight: {this.props.weight}</p>
                <p>Highest Medal: {this.props.highestMedal}</p>
                <button onClick = {this.hideDetails}>Hide Details</button>
            </div>
            
        </div>
        
      )
    }
  }

  export default Hog