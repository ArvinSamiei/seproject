import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ProductDetail extends React.Component {
	state = {
		selectedProduct: { title: "", description: "" },
		imagePath: "",
		tried: false,
		success: 2,
		successText: "",
	};
	componentDidMount() {
		axios
			.get(`http://localhost:8000/purchase/${this.props.id}/`, {
				headers: {
					"content-type": "text/plain",
				},
			})
			.then(response => {
				console.log(response);
				this.setState({
					selectedProduct: response.data[0].fields,
					imagePath: `http://localhost:8000/${response.data[0].fields.image}`,
				});
			});
	}

	handleBuy = e => {
        this.setState({ tried: true });
        window.scrollTo(0, 0)
		axios
			.post(`http://localhost:8000/purchase/buy/${this.props.id}/`, {
				username: "ali",
			})
			.then(response => {
				if (response.data == "You Bought it successfully.") {
					this.setState({ success: 1, successText: response.data });
				} else {
					this.setState({ success: 0, successText: response.data });
				}
				console.log(response);
			});
	};

	render() {
		if (this.state.tried) {
			let clazz = null;
			if (this.state.success == 2) {
				clazz = "spinner-border";
			} else if (this.state.success == 0) {
				clazz = "p-3 mb-2 bg-danger text-white"
			} else {
				clazz = "p-3 mb-2 bg-success text-white";
			}
			return (
				<div className="container">
					<div className={clazz} id="succesText" >{this.state.successText}</div>
					<h1 className="my-4">{this.state.selectedProduct.title}</h1>

					<div className="row">
						<div className="col-md-8">
							<img className="img-fluid" src={this.state.imagePath} alt="" />
						</div>

						<div className="col-md-4">
							<h3 className="my-3">Product Description</h3>
							<p>{this.state.selectedProduct.description}</p>
						</div>
					</div>
					<button
                    href="#successText"
					className="btn btn-primary"
					onClick={e => {
						this.handleBuy(e);
					}}
					style={{ width: "100%" }}
				>
					Buy
				</button>
				</div>
			);
		}
		return (
			<div className="container">
				<h1 className="my-4">{this.state.selectedProduct.title}</h1>

				<div className="row">
					<div className="col-md-8">
						<img className="img-fluid" src={this.state.imagePath} alt="" />
					</div>

					<div className="col-md-4">
						<h3 className="my-3">Product Description</h3>
						<p>{this.state.selectedProduct.description}</p>
					</div>
				</div>
				<button
                    href="#successText"
					className="btn btn-primary"
					onClick={e => {
						this.handleBuy(e);
					}}
					style={{ width: "100%" }}
				>
					Buy
				</button>
			</div>
		);
	}
}
