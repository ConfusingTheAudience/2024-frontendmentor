import React from "react";

const Modal = ({ products, totalCost, setShowModal, setProducts }) => {
  function newOrder() {
    setProducts([]);
    setShowModal(false);
  }
  return (
    <>
      <div className="modalOverlay"></div>
      <div className="modal">
        <img src="src/assets/images/icon-order-confirmed.svg" alt="" />
        <h1>Order Confirmed</h1>
        <p className="modalDescription">We hope you enjoy your food!</p>
        <div className="basketContainer">
          {products.map((singleProduct) => (
            <div className="basketItem" key={singleProduct.id}>
              <img src={singleProduct.productImage} alt="" className="basketImg"/>
              <div className="basketInfo">
                <h5 className="basketName">{singleProduct.name}</h5>
                <div className="basketDetails">
                  <div className="basketQuantity">
                    {singleProduct.quantity}x
                  </div>
                  <span className="basketPrice">@ {singleProduct.price}</span>
                </div>
              </div>
              <span className="basketSingleTotalPrice">
                $
                {(
                  singleProduct.price.replace(/\$/g, "") *
                  singleProduct.quantity
                ).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="basketTotal">
            <h4 className="basketTotalTitle">Order Total</h4>
            <p className="basketTotalPrice">${totalCost}</p>
          </div>
        </div>
        <button className="newOrderBtn" onClick={() => newOrder()}>
          Start New Order
        </button>
      </div>
    </>
  );
};

export default Modal;
