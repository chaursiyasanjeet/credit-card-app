import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css";
export default function Input({ sendCardData }) {
  const [cardData, setCardData] = useState({
    cardholdername: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvc: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCardData({ ...cardData, [name]: value });
  };

  const validateForms = () => {
    const newError = {}; // Initialize an empty error object

    if (cardData.cardholdername.trim() === "") {
      newError.cardholdername = "Cardholder name is required";
    }

    if (!/^\d{16}$/.test(cardData.cardNumber.replace(/\s/g, ""))) {
      newError.cardNumber = "Card number must be 16 digits";
    }

    if (!/^\d{2}$/.test(cardData.mm) || cardData.mm < 1 || cardData.mm > 12) {
      newError.expiry = "Invalid Input";
    }
    if (!/^\d{2}$/.test(cardData.yy) || cardData.yy < 23) {
      newError.expiry = "Invalid Input";
    }
    if (!/^\d{2}$/.test(cardData.mm) || !/^\d{2}$/.test(cardData.yy)) {
      newError.expiry = "Expiry required";
    }

    if (!/^\d{3}$/.test(cardData.cvc)) {
      newError.cvc = "CVC must be 3 digits";
    }

    setError(newError);
    if (Object.keys(newError).length === 0) {
      setError({});
      return true;
    }
  };
  const sucess = () => toast.success("Card details added Sucessfully!!");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = validateForms();
    if (valid) {
      sucess();
      sendCardData(cardData);
      setCardData({
        cardholdername: "",
        cardNumber: "",
        mm: "",
        yy: "",
        cvc: "",
      });
    }
  };

  return (
    <div className="card-input-form">
      <form onSubmit={handleSubmit}>
        <div className="input-name-box">
          <span>CARDHOLDER NAME</span>
          <input
            value={cardData.cardholdername}
            placeholder="e.g. Sanjeet Kumar"
            type="text"
            name="cardholdername"
            onChange={handleChange}
            maxLength="20"
          />
          <span className="error-text">{error && error.cardholdername}</span>
        </div>
        <div className="input-cardnumber-box">
          <span>CARD NUMBER</span>
          <input
            placeholder="e.g. 1234 4566 5604 5678"
            type="text"
            name="cardNumber"
            value={cardData.cardNumber}
            onChange={handleChange}
            maxLength="16"
          />
          <span className="error-text">{error && error.cardNumber}</span>
        </div>
        <div className="input-expiry-cvv-box">
          <div className="input-expiry">
            <span>EXP.DATE (MM/YY)</span>
            <div>
              <input
                placeholder="MM"
                type="text"
                name="mm"
                value={cardData.mm}
                onChange={handleChange}
                maxLength="2"
              />
              <input
                placeholder="YY"
                type="text"
                name="yy"
                value={cardData.yy}
                onChange={handleChange}
                maxLength="2"
              />
            </div>
            <span className="error-text">{error && error.expiry}</span>
          </div>
          <div className="input-cvv">
            <span>CVC</span>
            <input
              placeholder="e.g. 123"
              type="text"
              name="cvc"
              value={cardData.cvc}
              onChange={handleChange}
              maxLength="3"
            />
            <span className="error-text">{error && error.cvc}</span>
          </div>
        </div>
        <button>Confirm</button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
