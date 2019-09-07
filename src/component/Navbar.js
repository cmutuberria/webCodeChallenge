import React, { Component } from 'react'
import Search from './Search'

export default class Navbar extends Component {
    render() {
        return (
            <header>
				<div className="area">
					<div className="logo">
						<a href="#">Reddit</a>
					</div>
		
					<nav>
						<Search/>
					</nav>
				</div>
		</header>
        )
    }
}
