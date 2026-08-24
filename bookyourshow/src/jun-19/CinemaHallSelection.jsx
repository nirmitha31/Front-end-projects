import "./CinemaHallSelection.css";

function CinemaHallSelection({ movie, selectedShow, onShowSelect, onClose }) {
  const cinemas = [
    {
      id: 1,
      name: "PVR Orion Mall",
      location: "Rajajinagar, Bengaluru",
      distance: "4.2 km",
      features: ["IMAX", "Dolby Atmos", "Parking"],
      shows: ["10:30 AM", "1:45 PM", "6:30 PM", "9:45 PM"],
    },
    {
      id: 2,
      name: "INOX Garuda Mall",
      location: "MG Road, Bengaluru",
      distance: "6.8 km",
      features: ["2D", "Food Court", "Recliner"],
      shows: ["11:00 AM", "2:15 PM", "5:45 PM", "10:15 PM"],
    },
    {
      id: 3,
      name: "Cinepolis Nexus",
      location: "Koramangala, Bengaluru",
      distance: "8.1 km",
      features: ["4DX", "Laser Projection", "Cafe"],
      shows: ["9:45 AM", "12:50 PM", "4:20 PM", "8:30 PM"],
    },
  ];

  return (
    <section className="cinema-section">
      <div className="cinema-title">
        <div>
          <h2>Select Cinema Hall</h2>
          <p>{movie.title} • Today</p>
        </div>

        <div className="cinema-title-right">
          {selectedShow && (
            <div className="selected-show-badge">
              {selectedShow.cinemaName} • {selectedShow.time}
            </div>
          )}

          <button className="close-cinema-btn" onClick={onClose}>
            ✕
          </button>
        </div>
      </div>

      <div className="cinema-list">
        {cinemas.map((cinema) => (
          <div className="cinema-card" key={cinema.id}>
            <div className="cinema-info">
              <h3>{cinema.name}</h3>
              <p>{cinema.location}</p>
              <span>{cinema.distance}</span>

              <div className="cinema-features">
                {cinema.features.map((feature) => (
                  <small key={feature}>{feature}</small>
                ))}
              </div>
            </div>

            <div className="show-times">
              {cinema.shows.map((time) => {
                const active =
                  selectedShow?.cinemaId === cinema.id &&
                  selectedShow?.time === time;

                return (
                  <button
                    key={time}
                    className={active ? "active-show" : ""}
                    onClick={() =>
                      onShowSelect({
                        cinemaId: cinema.id,
                        cinemaName: cinema.name,
                        location: cinema.location,
                        time,
                      })
                    }
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CinemaHallSelection;
