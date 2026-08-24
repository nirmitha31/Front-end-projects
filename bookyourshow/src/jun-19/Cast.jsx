import "./Cast.css";

function Cast({ movie }) {
  if (!movie.cast) {
    return null;
  }

  return (
    <section className="cast-section">
      <h2>{movie.title} Cast</h2>

      <div className="cast-container">
        {movie.cast.map((artist, index) => (
          <div className="cast-card" key={index}>
            <img src={artist.photo} alt={artist.name} />

            <h3>{artist.name}</h3>

            <p>{artist.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cast;
