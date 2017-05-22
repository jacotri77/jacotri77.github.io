import React, {Component} from 'react'
import  '../index.css'
import {connect} from 'react-redux'
import {postForm} from '../api/jbDesigns'


class Footer extends Component{
	constructor(props){
		super(props)
		this.state = {
			forms:[],
	        firstName:"",
	        lastName:"",
	        emailAddress:"",
	        comments: ""

    	}
}
	

	handleSubmit = (e) =>{
		e.preventDefault()
		postForm(this.state)
		this.setState({
		forms:[],
        firstName:"",
        lastName:"",
        emailAddress:"",
        comments: ""
        
	})
}

	handleChange = (e) => {
  		this.setState({
    	[e.target.name]:e.target.value
  })
}

	componentWillUnMount(){
    	this.unsubscribe()
  	}


	render(){
		return(
		<div>	
		  <form onSubmit={this.handleSubmit}>
		   <h1 id="formH">Contact Me</h1>
		   <div id="firstColumn">
		    <label htmlFor="firstname">First Name</label>
		    <input type="text" id="firstname"  name="firstName" onChange={this.handleChange} value={this.state.firstName} autoComplete="off"/>
		    <label htmlFor="lastname">Last Name</label>
		    <input type="text" id="lastname" name="lastName" onChange={this.handleChange} value={this.state.lastName} autoComplete="off"/>
		    <label htmlFor="emailaddy">Email Address</label>
		    <input type="Email" id="emailaddy" name="emailAddress" onChange={this.handleChange}  value={this.state.emailAddress} autoComplete="off"/>
		   </div>
		   <div id="secondColumn">
		    <label htmlFor="comment">Drop Me A Line</label>
		    <input type="textarea" id="comment" name="comments" onChange={this.handleChange} value={this.state.comments} autoComplete="off"/>
		    <button type="submit" onClick={this.handleSubmit} id="subButton">Submit</button>
		   </div>
		  </form>
		  
		   </div> 

		)
	}
}

const mapStateToProps = function(appState) {
  return {
    forms: appState.forms,
    firstName:appState.firstName,
    lastName:appState.lastName,
    emailAddress:appState.emailAddress,
    comments: appState.comments
  }
}

export default connect(mapStateToProps)(Footer)
