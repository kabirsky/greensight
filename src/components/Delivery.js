import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import "./Delivery.css";

function Delivery() {
  const mask = [
    "+",
    "7",
    "(",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    ")",
    " ",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    "-",
    /[0-9]/,
    /[0-9]/,
    "-",
    /[0-9]/,
    /[0-9]/,
  ];

  const [disabled, setDisabled] = useState(false);

  const handleClickSubmit = (event) => {
    setDisabled(true);
    setTimeout(() => {alert("Заказ оформлен!");setDisabled(false);}, 1000);
    
  };

  return (
    <>
      <form>
        <div className="container">
          <div className="form">
            <div className="form__element fio">
              <label className="label">
                ФИО
                <input className="input" placeholder="Только кириллица" />
              </label>
            </div>

            <div className="form__element phone">
              <label className="label">
                Телефон
                <MaskedInput
                  className="input"
                  mask={mask}
                  placeholder="+7(___) ___-__-__"
                />
              </label>
            </div>

            <div className="form__element address">
              <label className="label address__label">
                Адрес доставки
                <input
                  className="input address__input"
                  placeholder="Город, улица, дом"
                />
              </label>
            </div>

            <div className="form__element comment">
              <label className="label comment__label">
                Комментарий
                <textarea className="input comment__input" rows={4} />
              </label>
            </div>
          </div>
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

export default Delivery;
