import CreateTrip from "./CreateTrip";
import TripLists from "./TripLists";

const TripContainer = () => {
  return (
    <div className="trip-container">
      <CreateTrip />
      <TripLists />
    </div>
  );
};

export default TripContainer;
