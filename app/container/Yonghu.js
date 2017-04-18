import React from "react";
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';


var Yonghu = () => {
	//预备的东西，圆括号里面没有东西
	return (
		<div id="main-content">
			<section className="wrapper">
				<h1>我是C</h1>
			</section>
		</div>
	)
}

//加工CounterContainer
Yonghu = connect(
	(state)=>{
		return {
			 
		}
	},{}
)(Yonghu);

export default Yonghu;