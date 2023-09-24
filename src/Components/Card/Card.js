import "./Card.css";
export default function Display({ cardholdername, cardNumber, mm, yy, cvc }) {
  return (
    <div className="cardDetails">
      <div className="cardFront">
        <span
          className="card-number"
          style={{ opacity: cardNumber ? "1" : "0.5" }}
        >
          {cardNumber ? cardNumber : "0000 0000 0000 0000"}
        </span>
        <span
          className="card-owner-name"
          style={{ opacity: cardholdername ? "1" : "0.5" }}
        >
          {cardholdername ? cardholdername : "Sanjeet Kumar"}
        </span>
        <span
          className="card-expiry"
          style={{ opacity: mm && yy ? "1" : "0.5" }}
        >
          {mm ? mm : "00"}/{yy ? yy : "00"}
        </span>
      </div>

      <div className="cardBack">
        <span className="cvv" style={{ opacity: cvc ? "1" : "0.5" }}>
          {cvc ? cvc : "000"}
        </span>
      </div>
    </div>
  );
}
