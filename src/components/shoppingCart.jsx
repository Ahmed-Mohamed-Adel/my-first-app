import React, { Component } from "react";

import Product from "./product";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    console.log("Shooping Cart ==> Constructor");
  }
  componentDidMount() {
    console.log("Shooping Cart ==> ComponentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Shooping Cart ==> ComponentDidUpdate");
    console.log(prevProps);
  }
  render() {
    console.log("Shooping Cart ==> Render");
    const { products, onReset, onDelete, onIncrement } = this.props;
    return (
      <React.Fragment>
        <h1>Shopping Cart</h1>
        <button onClick={onReset} className="btn btn-secondary btn-sm m-2">
          Reset
        </button>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
