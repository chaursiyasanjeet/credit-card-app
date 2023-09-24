import { useState } from "react";
import Card from "../Components/Card/Card";
import Form from "../Components/Form/Form";
import "./Homepage.css";
export default function Homepage() {
  const [cardDetails, setCardDetails] = useState();
  return (
    <div className="home-page">
      <Card
        cardholdername={cardDetails && cardDetails.cardholdername}
        cardNumber={
          cardDetails && cardDetails.cardNumber.replace(/(\d{4})/g, "$1 ")
        }
        mm={cardDetails && cardDetails.mm}
        yy={cardDetails && cardDetails.yy}
        cvc={cardDetails && cardDetails.cvc}
      />
      <Form sendCardData={setCardDetails} />
    </div>
  );
}
