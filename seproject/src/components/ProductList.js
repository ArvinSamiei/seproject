import React from "react";
import Product from "./Product";
import "./ProductList.css";
class ProductList extends React.Component {
	render() {
		const products = this.props.products.map(product => {
			return <Product key={product.pk} product={product.fields} id={product.pk} handleRouteToProductPage={this.props.handleRouteToProductPage} />;
		});
		return <div className="product-list">{products}</div>;
	}
}

export default ProductList;
