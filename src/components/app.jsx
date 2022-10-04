import React, { Component } from "react";
import NavBar from "./navbar";
import { Route, Routes } from "react-router-dom";
import ShoppingCart from "./shoppingCart";
import ProductDetails from "./productDetails";
import NotFound from "./notFound";
import Menu from "./menu";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", price: 30, count: 0, isInCart: false },
      { id: 2, name: "Fries", price: 20, count: 0, isInCart: false },
      { id: 3, name: "Cola", price: 10, count: 0, isInCart: false },
    ],
  };

  handleDelete = (product) => {
    // Clone
    // Edit
    const products = this.state.products.filter((p) => p.id !== product.id);
    // Set state
    this.setState({ products });
  };

  handleReset = () => {
    // Clone
    let products = [...this.state.products];
    // Edit
    products.map((p) => {
      p.count = 0;
      return p;
    });
    // Set state
    this.setState({ products });
  };

  IncrementHandler = (product) => {
    // Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    // Edit
    products[index].count++;
    // Set state
    this.setState({ products });
  };

  handleInCartChange = (product) => {
    // Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    // Edit
    products[index].isInCart = !products[index].isInCart;
    // Set state
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          productsCount={this.state.products.filter((p) => p.count > 0).length}
        />
        <main className="container">
          <Routes>
            <Route
              path="/products/:id"
              element={
                <ProductDetails
                  products={this.state.products}
                  {...this.props}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <ShoppingCart
                  products={this.state.products}
                  onIncrement={this.IncrementHandler}
                  onDelete={this.handleDelete}
                  onReset={this.handleReset}
                  {...this.props}
                />
              }
            />
            <Route path="/notFound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/menu"
              element={
                <Menu
                  {...this.props}
                  products={this.state.products}
                  onClick={this.handleInCartChange}
                />
              }
            />
          </Routes>
          {/* <ShoppingCart
            products={this.state.products}
            onIncrement={this.IncrementHandler}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
