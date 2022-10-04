import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import qs from "query-string";

const ProductDetails = (props) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const res = qs.parse(search);
  console.log(res);
  const { id } = useParams();
  const { products } = props;
  const product = products.filter((c) => c.id === parseInt(id))[0];
  return (
    <React.Fragment>
      <h1>Details No.{id}</h1>
      <h2>{product.name}</h2>
      <h2>Count in Shopping Cart: {product.count}</h2>
      <button
        onClick={() => navigate("/cart", { replace: true })}
        className="btn btn-primary btn-sm"
      >
        Save
      </button>
    </React.Fragment>
  );
};

export default ProductDetails;
