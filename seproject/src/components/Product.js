import React from "react";
import { Link } from "react-router-dom";

class Product extends React.Component {
	constructor() {
		super();
		this.state = { spans: 0 };
		this.refer = React.createRef();
	}

	componentDidMount() {
		console.log(this.refer);
		this.refer.current.addEventListener("load", this.setSpans);
	}

	setSpans = () => {
		const height = this.refer.current.clientHeight;
		console.log(height);
		const spans = Math.ceil(height / 10);
		this.setState({ spans: spans });
	};

	getProductPath = () => {
		console.log("products/" + this.props.id);
		return "/products/" + this.props.id;
	};

	handleClick = e => {
		e.stopPropagation();
		this.props.handleRouteToProductPage(
			this.props.product,
			this.props.id,
			`http://localhost:8000/${this.props.product.image}`,
		);
	};

	render() {
		return (
			<div className="card" ref={this.refer}>
				<div className="profile-header-container">
					<div className="profile-header-img">
						<img
							className="img-rounded"
							src={`http://localhost:8000/${this.props.product.image}`}
							style={{ width: "250px" }}
						/>
					</div>
				</div>
				<br />
				<div className="card-body">
					<h5 className="card-title">{this.props.product.title}</h5>
					<p className="card-text">{this.props.product.quick_note}</p>
					<p>price: {this.props.product.price}$</p>
				</div>

				<Link
					onClick={e => {
						this.handleClick(e);
					}}
					className="btn btn-primary"
					to={this.getProductPath()}
				>
					View
				</Link>
			</div>
		);
	}
}

export default Product;
