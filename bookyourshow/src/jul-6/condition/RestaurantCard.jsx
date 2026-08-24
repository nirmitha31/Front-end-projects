function RestaurantCard(props) {
  const { name, rating, isOpen } = props;

  return (
    <div className="card">
      <h2>{name}</h2>

      <p>⭐ {rating}</p>

      {isOpen ? <button>Order Now</button> : <button disabled>Closed</button>}
    </div>
  );
}

export default RestaurantCard;
