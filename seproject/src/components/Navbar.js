import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends React.Component {
	render() {
		if (this.props.isLoggedIn) {
			console.log(localStorage.getItem("username"));
			return (
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<Link to="/">
									
										Home <span className="sr-only">(current)</span>
									
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			);
		}
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to="/">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
					</ul>
				</div>

				<div
					style={{ float: "left" }}
					className="collapse navbar-collapse"
					id="navbarNavDropdown"
				>
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to="/login">
								Login <span className="sr-only">(current)</span>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
