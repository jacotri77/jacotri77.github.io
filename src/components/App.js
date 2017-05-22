import React, {Component} from 'react'
import  '../index.css'
import {connect} from 'react-redux'
import Footer from './footer'
import Header from './header'


class App extends Component{

render(){
	return (
    <div id="appContainer">

    <Header />

		<div className="interiorDiv">
		
        <img src={require("../../images/profilejpg.jpg")} alt="#" id='interiorDivImg'/>
        
        <div
          id='pictBox'>

          <div 
            id='boxOne'>

              <img src={require("../../images/React-1-0.png")} alt="#"/>

          </div>

          <div 
            id='boxTwo'>

              <img src={require("../../images/redux.png")} alt="#"/>

          </div>

          <div 
            id='boxThree'>

              <img src={require("../../images/html5-css3-js-logo.png")} alt="#"/>

          </div>

          </div>

    <Footer />

    </div>

   </div>
    )
  }
}


const mapStateToProps = function(appState) {
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(App)