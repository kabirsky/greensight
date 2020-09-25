import React, { useState } from "react";
import PickupMap from "./PickupMap";
import "./Pickup.css";
import "./form.css";

function Pickup() {
  let isError = false;
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [choice, setChoice] = useState(null);

  const handleChangePoint = (event) => {
    setChoice(event.target.value);
  };

  const handleClickSubmit = (event) => {
    isError = false;

    if (choice === null || choice === "") {
      isError = true;
      setError(true);
    } else {
      setError(false);
    }

    if (!isError) {
      setDisabled(true);
      setTimeout(() => {
        alert("Заказ оформлен!");
        setDisabled(false);
      }, 1000);
    }
  };

  return (
    <>
      <form>
        <div className="container">
          <div className="form">
            <div className="form__element btn">
              <input
                type="radio"
                onChange={handleChangePoint}
                id="point1"
                name="pickupPoint"
                value="Пункт выдачи заказов 1"
              />
              <label htmlFor="point1" className="label__radio">Пункт выдачи заказов 1</label>
            </div>
            <div className="form__element btn">
              <input
                type="radio"
                onChange={handleChangePoint}
                id="point2"
                name="pickupPoint"
                value="Пункт выдачи заказов 2"
              />
              <label htmlFor="point2" className="label__radio">Пункт выдачи заказов 2</label>
            </div>
            {error ? (
              <label className="label err radio">
                Выберите пункт выдачи заказов
              </label>
            ) : null}
          </div>

          <PickupMap />

          <div className="form__btn">
            <button
              className="delivery__btn"
              type="button"
              onClick={handleClickSubmit}
              disabled={disabled}
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Pickup;
