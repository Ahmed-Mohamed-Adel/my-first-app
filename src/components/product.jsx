import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  // state = {
  //   name: this.props.product.name,
  //   count: this.props.product.count,
  // };
  getClasses() {
    return this.props.product.count === 0
      ? "badge text-bg-warning m-2"
      : "badge bg-primary m-2";
  }
  // 1.
  // renderNames() {
  //   if (this.props.product.names.length === 0) {
  //     return <h2>No Names</h2>;
  //   }
  //   return (
  // <ul>
  //   {this.props.product.names.map((name) => (
  //     <li key={name}>{name}</li>
  //   ))}
  // </ul>
  //   );
  // }

  componentWillUnmount() {
    console.log("Product ==> UNMOUNT");
  }

  render() {
    console.log("Product ==> Render");
    return (
      <div className="row">
        <div className="col-2">
          <span>
            <Link to={`/products/${this.props.product.id}`}>
              {this.props.product.name}
            </Link>
          </span>
        </div>
        <div className="col">
          <span className={this.getClasses()}>{this.props.product.count}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.product)}
            className="btn btn-primary btn-sm"
          >
            +
          </button>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => this.props.onDelete(this.props.product)}
          >
            <i className="fas fa-trash m-2"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
