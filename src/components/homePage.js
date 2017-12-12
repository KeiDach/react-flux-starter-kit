"use strict";

// var React = require('react');
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Welcome to the React Flux Starter Kit</h1>
                <p>
                    React, Flux, and React Router combined with Browserify, Gulp, and Bootstrap. Build a React and Flux app from scratch using this starter kit on <a href="http://www.pluralsight.com/courses/react-flux-building-applications">Pluralsight</a>.
                </p>
            </div>
        );
    }
}

export default Home;

// var React = require('react');

// var Home = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="jumbotron">
// 				<h1>Pluralsight Administration</h1>
// 				<p>React, React Router, and Flux for ultra-responsive web apps.</p>
// 			</div>
// 		);
// 	}
// });

// module.exports = Home;