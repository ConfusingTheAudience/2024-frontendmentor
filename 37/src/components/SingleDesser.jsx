import React, { useContext } from "react";
import addToCartIcon from "../assets/images/icon-add-to-cart.svg";
import data from "../data.json";
import { ProductContext } from "../contexts/ProductContext";

const SingleDesser = () => {
  const { setProducts, products } = useContext(ProductContext);

  function addProduct(e, id) {
    const productName = e.target.parentElement.parentElement.children[1].children[1].textContent;
    const productPrice = e.target.parentElement.parentElement.children[1].children[2].textContent;
    const productImg = e.target.parentElement.parentElement.children[0].children[0].children[3].src;

    setProducts((prevProducts) => [
      ...prevProducts,
      { id, name: productName, price: productPrice, quantity: 1, productImage: productImg },
    ]);
  }

  function decrementValue(id) {
    setProducts((prevProducts) =>
      prevProducts
        .map((product) => {
          if (product.id === id) {
            const newQuantity = product.quantity - 1;
            if (newQuantity <= 0) {
              return null;
            }
            return { ...product, quantity: newQuantity };
          }
          return product;
        })
        .filter((product) => product !== null)
    );
  }

  function incrementValue(id) {
    setProducts((prevProducts) =>
      prevProducts.map((product) => product.id === id ? { ...product, quantity: product.quantity + 1 } : product)
    );
  }

  return (
    <>
      {data.map((singleItem, i) => {
        const existingProduct = products.find((p) => p.id === i);

        return (
          <div className="singleDessert" key={i}>
            <div className="containerForImg">
              {existingProduct ? (
                <>
                  <picture>
                    <source media="(min-width: 768px)" srcSet={singleItem.image.desktop} />
                    <source media="(min-width: 480px)" srcSet={singleItem.image.tablet} />
                    <source media="(max-width: 479px)" srcSet={singleItem.image.mobile} />
                    <img src={singleItem.image.thumbnail} alt="" className="imgWithIndicator"/>
                  </picture>
                  <div className="indicatorQuantity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="2"
                      fill="none"
                      viewBox="0 0 10 2"
                      className="quantityIcon"
                      onClick={() => decrementValue(i)}
                    >
                      <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                    </svg>
                    <span className="quantityAmount">
                      {existingProduct.quantity}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="none"
                      viewBox="0 0 10 10"
                      className="quantityIcon"
                      onClick={() => incrementValue(i)}
                    >
                      <path
                        fill="#fff"
                        d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                      />
                    </svg>
                  </div>
                </>
              ) : (
                <>
                  <picture>
                    <source media="(min-width: 768px)" srcSet={singleItem.image.desktop} />
                    <source media="(min-width: 480px)" srcSet={singleItem.image.tablet} />
                    <source media="(max-width: 479px)" srcSet={singleItem.image.mobile} />
                    <img src={singleItem.image.thumbnail} alt="" className="imgWithoutIndicator"/>
                  </picture>
                  <div className="indicator" onClick={(e) => addProduct(e, i)}>
                    <img
                      src={addToCartIcon}
                      alt="addToCartIcon"
                      style={{ pointerEvents: "none", userSelect: "none" }}
                    />
                    <p style={{ pointerEvents: "none", userSelect: "none" }}>
                      Add to Cart
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="containerForInfo">
              <p className="dessertCategory">{singleItem.category}</p>
              <h4 className="dessertName">{singleItem.name}</h4>
              <p className="dessertPrice">${singleItem.price.toFixed(2)}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SingleDesser;
