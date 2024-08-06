import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductPage.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductPage = () => {
  const { name } = useParams();
  const { email } = useParams();
  const [product, setProduct] = useState({});
  const [userMail, setUserMail] = useState("");
  const [productName, setProductName] = useState("");
  const [id, setId] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const api = `http://localhost:8081/product/getByName/${name}`;
    axios.get(api)
      .then((response) => setProduct(response.data))
      .catch((error) => {
        console.log(error);
      });
    }, [name]);

  useEffect(() => {
    setUserMail(email);
    setProductName(product.name);
    setId(product.productId);
    setQuantity(product.quantity);
    setCategory(product.category);
    setDescription(product.description);
    setImg(product.img);
    setPrice(product.price);
  }, [email,product.name,product.productId,product.quantity,product.category,product.description,product.img,product.price]);
  const handleAddToCart = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8083/cart/addProduct", {
        email: userMail,
        productId: id,
        name: productName,
        quantity: quantity,
        price: price,
        category: category,
        description: description,
        img: img
      })
      .then((res) => {
        alert("Added To Cart");
        navigate(-1);
        
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
  };

  const handler = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    navigate("/");
  };
  const handler1 = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      <div className="button-container">
        <span>
          <button className="button-back" onClick={handler1}>
            Back
          </button>
        </span>
        <span>
          <button className="button-signout" onClick={handler}>
            Sign Out
          </button>
        </span>
      </div>
      <div className="product-page-container">
        <ProductImage imageUrl={product.img} />
        <div className="product-details-container">
          <ProductDetails
            name={product.name}
            description={product.description}
          />
          <ProductPrice price={product.price/2} />
          <button className="add-to-cart" onClick={(e) => handleAddToCart(e)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
