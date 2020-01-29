import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";
import "./Navbar.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = { products: [], isLogged: true };
	}

	componentDidMount() {
		const id = 4;
		axios.get("http://localhost:8000/purchase/", {}).then(response => {
			console.log(response);
			this.setState({ products: response.data });
		});
	}

	handleNavbarLogin = () => {
		this.setState({ isLogged: true });
	};

	handleRouteToProductPage = (product, id, imagePath) => {
		this.setState({
			selectedProductId: id,
			selectedProductImagePath: imagePath,
		});
	};

	render() {
		return (
			<div style={{ cursor: "default" }}>
				<Navbar isLoggedIn={this.state.isLogged} />
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<div>
								<ProductList
									products={this.state.products}
									handleRouteToProductPage={this.handleRouteToProductPage}
								/>
							</div>
						)}
					/>
					<Route
						exact
						path="/products/:productId"
						render={props => (
							<div>
								<ProductDetail
									product={this.state.selectedProduct}
									id={props.match.params.productId}
									imagePath={this.state.selectedProductImagePath}
								/>
							</div>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
