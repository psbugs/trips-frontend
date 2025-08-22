const TripLists = ({ trips }) => {
  return (
    <div className="trip-lists">
      {trips.length === 0 ? (
        <p className="no-trips">Loading Trips...</p>
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
