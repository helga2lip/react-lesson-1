import React from 'react';
import logo from './logo.svg'; /*декларативный*/
import './App.css'; /*декларативный*/

function App() {
	const currentYear = new Date().getFullYear();
	return (
		React.createElement( "div",
			{
			  className: "App"
			},
			React.createElement("header",
				{
					className: "App-header"
				},
				[
					React.createElement("img",
						{
							className: "App-logo",
							alt: "logo",
							src: logo,
						},
						null
					),
					React.createElement("p",
						null,
						[
							'Edit ',
							React.createElement("code",
								null,
								'src/App.js'
							),
							' and save to reload.'
						 ]
					),
					React.createElement("a",
						{
							className: "App-link",
							href: "https://reactjs.org",
							target: "_blank",
							rel: "noopener noreferrer",
						},
						'Learn React'
					),
					React.createElement("div",
						null,
						currentYear
					),
				]
			)
		)
	)
}

export default App; /*декларативный*/
