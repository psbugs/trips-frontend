const TripLists = ({ trips }) => {
  return (
    <div className="trip-lists">
      <h2>Trip List</h2>
      {trips.length === 0 ? (
        <p className="no-trips">No trips added yet.</p>
      ) : (
        <ul>
          {trips.map((trip, idx) => (
            <li key={idx}>{trip.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TripLists;
