import "./display.css"
export default function Display() {
    return (
        <div className="cardDetails">
            <div className="cardFront">
                <p className="card-number card-details">0000 0000 0000</p>
                <p className="card-name card-details">Sanjeet Kumar</p>
                <p className="card-expiry card-details">00/00</p>
            </div>

            <div className="cardBack">
                <p className="cvv card-details">000</p>
            </div>
        </div>
    )
}