import { useState } from "react";
import "./SeatBooking.css";

function SeatBooking({ movie }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatRows = ["A", "B", "C", "D", "E", "F"];
  const seatNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const bookedSeats = ["A2", "A3", "C5", "D7", "F1"];
  const ticketPrice = 250;

  function handleSeatClick(seat) {
    if (bookedSeats.includes(seat)) {
      return;
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  }

  return (
    <section className="seat-booking-section">
      <div className="seat-header">
        <div>
          <h2>Book Seats</h2>
          <p>{movie.title} • Today • 7:30 PM</p>
        </div>

        <div className="price-box">₹{ticketPrice} / ticket</div>
      </div>

      <div className="screen-box">
        <p>SCREEN</p>
      </div>

      <div className="seat-layout">
        {seatRows.map((row) => (
          <div className="seat-row" key={row}>
            <span className="row-label">{row}</span>

            {seatNumbers.map((number) => {
              const seat = row + number;
              const isBooked = bookedSeats.includes(seat);
              const isSelected = selectedSeats.includes(seat);

              return (
                <button
                  key={seat}
                  className={`seat ${
                    isBooked ? "booked-seat" : ""
                  } ${isSelected ? "selected-seat" : ""}`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {number}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="seat-legend">
        <div>
          <span className="legend-box available"></span>
          Available
        </div>

        <div>
          <span className="legend-box selected"></span>
          Selected
        </div>

        <div>
          <span className="legend-box booked"></span>
          Booked
        </div>
      </div>

      <div className="booking-summary">
        <div>
          <h3>Selected Seats</h3>
          <p>
            {selectedSeats.length > 0
              ? selectedSeats.join(", ")
              : "No seats selected"}
          </p>
        </div>

        <div>
          <h3>Total Amount</h3>
          <p>₹{selectedSeats.length * ticketPrice}</p>
        </div>

        <button disabled={selectedSeats.length === 0}>Proceed to Pay</button>
      </div>
    </section>
  );
}

export default SeatBooking;
