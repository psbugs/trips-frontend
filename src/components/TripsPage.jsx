import { useState, useEffect } from "react";
import TripLists from "./TripLists";
import CreateTrip from "./CreateTrip";

const TripsPage = () => {
  const [trips, setTrips] = useState([]);

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

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <div>
      <CreateTrip onTripAdded={fetchTrips} />
      <TripLists trips={trips} />
    </div>
  );
};

export default TripsPage;
