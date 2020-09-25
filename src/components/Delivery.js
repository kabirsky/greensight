import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import "./Delivery.css";
import "./form.css"

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
  /*const isValid = {
    nameExist: true,
    isName: true,
    phoneExist: true,
    addressExist: true,
  };*/
  let isError = false;
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [comment, setComment] = useState(null);

  const [errorName, setErrorName] = useState("err__icon disable");
  const [errorPhone, setErrorPhone] = useState("err__icon disable");
  const [errorAddress, setErrorAddress] = useState("err__icon disable");

  const [errorNameText, setErrorNameText] = useState(null);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleClickSubmit = (event) => {
    isError = false;

    //Проверка ФИО
    if (name === null || name === "") {
      isError = true;
      setErrorName("err__icon");
      setErrorNameText("Введите имя");
    } else {
      if (name.match(/^[А-ЯЁ\s-]*$/i) === null) {
        isError = true;
        setErrorName("err__icon");
        setErrorNameText("Некорректное имя");
      } else {
        setErrorName("err__icon disable");
        setErrorNameText(null);
      }
    }

    //Проверка телефона
    if (phone === null || phone === "") {
      isError = true;
      setErrorPhone("err__icon");
    } else {
      setErrorPhone("err__icon disable");
    }

    //Проверка адреса
    if (address === null || address === "") {
      isError = true;
      setErrorAddress("err__icon");
    } else {
      setErrorAddress("err__icon disable");
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
            <div className="form__element fio">
              <label className="label">
                ФИО
                <span className={errorName}></span>
                <input
                  className="input"
                  onChange={handleChangeName}
                  placeholder="Только кириллица"
                />
              </label>
              {errorName === "err__icon" ? (
                <label className="label err">{errorNameText}</label>
              ) : null}
            </div>

            <div className="form__element phone">
              <label className="label">
                Телефон
                <span className={errorPhone}></span>
                <MaskedInput
                  className="input"
                  onChange={handleChangePhone}
                  mask={mask}
                  placeholder="+7(___) ___-__-__"
                />
              </label>
              {errorPhone === "err__icon" ? (
                <label className="label err">Введите телефон</label>
              ) : null}
            </div>

            <div className="form__element address">
              <label className="label address__label">
                Адрес доставки
                <span className={errorAddress}></span>
                <input
                  className="input address__input"
                  onChange={handleChangeAddress}
                  placeholder="Город, улица, дом"
                />
              </label>
              {errorAddress === "err__icon" ? (
                <label className="label err">Введите адрес</label>
              ) : null}
            </div>

            <div className="form__element comment">
              <label className="label comment__label">
                Комментарий
                <textarea
                  className="input comment__input"
                  onChange={handleChangeComment}
                  rows={4}
                />
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
