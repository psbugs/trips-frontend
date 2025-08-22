import { useState, useEffect } from "react";

const TripLists = () => {
  const [trips, setTrips] = useState([]);
  console.log("REACT_APP_API_URL inside list component",process.env.REACT_APP_API_URL)
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}api/trips/get-trips`);
        if (!res.ok) throw new Error("Failed to fetch trips");
        const data = await res.json();
        setTrips(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTrips();
  }, []);

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
