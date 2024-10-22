import React, { useContext, useEffect, useState } from "react";
import RemoveItemIcon from "../assets/images/icon-remove-item.svg";
import CarbonNeutralIcon from "../assets/images/icon-carbon-neutral.svg";
import { ProductContext } from "../contexts/ProductContext";
import Modal from "./Modal";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const [howManyProducts, setHowManyProducts] = useState(0);
  const [shoppingCost, setShoppingCost] = useState(0);
  const { products, setProducts } = useContext(ProductContext);

  useEffect(() => {
    const totalCost = products.reduce((total, singleProduct) => {
      return total + singleProduct?.price.replace(/\$/g, "") * singleProduct?.quantity;
    }, 0);
    
    setShoppingCost(totalCost.toFixed(2));
    setHowManyProducts(products.reduce((sum, singleProduct) => sum + singleProduct?.quantity, 0));
  }, [products]);

  function removeProduct(currentProduct){
    const newArray = products.filter(p => p.id !== currentProduct.id);
    setProducts(newArray);
  }

  return (
    <div className="cart">
      <h1 className="cartTitle">Your cart ({howManyProducts})</h1>

      {products.length > 0 ? (
        <div className="cartFilled">
          {products.map((singleProduct, i) => (
            <div className="cartItem" key={i}>
              <h4 className="cartProductTtitle">{singleProduct.name}</h4>
              <div className="cartInfo">
                <span className="cartQuantity">{singleProduct.quantity}x</span>
                <p>
                  @{" "}
                  <span className="cartSinglePrice">
                    {singleProduct.price}{" "}
                  </span>
                  <span className="cartSingleTotalPrice">
                    $
                    {(
                      singleProduct.price.replace(/\$/g, "") *
                      singleProduct.quantity
                    ).toFixed(2)}
                  </span>
                </p>
              </div>
              <img
                src={RemoveItemIcon}
                alt="remove-item-icon"
                className="cartRemoveIcon"
                onClick={()=> removeProduct(singleProduct)}
              />
            </div>
          ))}

          <div className="cartTotal">
            <h4 className="cartTotalTitle">Order Total</h4>
            <div className="cartTotalPrice">${shoppingCost}</div>
          </div>
          <div className="cartBanner">
            <img src={CarbonNeutralIcon} alt="banner-img" />
            <p>
              This is a <span>carbon-neutral</span> delivery
            </p>
          </div>
          <button className="cartBtn" onClick={()=> setShowModal(!showModal)}>Confirm Order</button>
        </div>
      ) : (
        <div className="cartEmpty">
          <img
            src="src/assets/images/illustration-empty-cart.svg"
            alt="empty-cart"
          />
          <p>Your added items will appear here</p>
        </div>
      )}
      {showModal && <Modal products={products} totalCost={shoppingCost} setShowModal={setShowModal} setProducts={setProducts}/>}
    </div>
  );
};

export default Cart;
