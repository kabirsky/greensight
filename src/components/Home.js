import React, { useState } from "react";
import Delivery from './Delivery';
import Pickup from './Pickup'
import "./Home.css";

function Home() {
  const [deliveryClass, setDeliveryClass] = useState("selector__btn active");
  const [pickupClass, setPickupClass] = useState("selector__btn");

  const handleClickDelivery = () => {
    if (deliveryClass === "selector__btn") {
      setDeliveryClass("selector__btn active");
      setPickupClass("selector__btn");
    }
  };

  const handleClickPickup = () => {
    if (pickupClass === "selector__btn") {
      setDeliveryClass("selector__btn");
      setPickupClass("selector__btn active");
    }
  };

  return (
    <div className="Home">
      <div className="container">
        <h1>Выберите способ доставки</h1>
        <div className="selector">
          <span className={deliveryClass} onClick={handleClickDelivery}>
            Доставка
          </span>
          <span className={pickupClass} onClick={handleClickPickup}>
            Самовывоз
          </span>
        </div>
        <div className="applet">
          {deliveryClass === "selector__btn active" ? (
            <Delivery />
          ) : (
            <Pickup />
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
