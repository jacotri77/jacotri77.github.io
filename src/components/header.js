import React, {Component} from 'react'

class Header extends Component{

	render(){
		return(
			<div id="headerCont">
				<h1>Jittery Bastard Dev Shop</h1>
				<div className="social">    
			    <span className="fa-2x">
			      <a href="https://www.facebook.com/jitterydesigns/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
			      <a href="https://github.com/jacotri77"><i className="fa fa-github" aria-hidden="true"></i></a>
			      <a href="https://www.linkedin.com/in/erik-jacobsen-a027bb27/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
			    </span>
			    </div>
		   </div>

		)
	}
}


export default Header