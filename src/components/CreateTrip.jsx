import { useState } from "react";
import { toast } from "react-toastify";

const CreateTrip = ({ onTripAdded }) => {
  const [enteredTripName, setEnteredTripName] = useState("");
  const [tripNameErr, setTripNameErr] = useState("");

  const addTripOnClick = async () => {
    if (!enteredTripName.trim()) {
      setTripNameErr("Please enter a valid trip name.");
      return;
    }
    setTripNameErr("");
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}api/trips/add-trip`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: enteredTripName }),
      });

      if (!res.ok) throw new Error("Failed to post data");

      await res.json();
      toast.success("Trip added successfully 🚀");

      setEnteredTripName("");

      // Refresh trips after successful add
      if (onTripAdded) onTripAdded();
    } catch (err) {
      toast.error("Unable to create trip ❌");
      console.error(err);
    }
  };

  const handleTripInputChange = (e) => {
    setTripNameErr("");
    setEnteredTripName(e.target.value)
  }
  return (
    <div className="create-trip">
      <div className="input-row">
        <input
          type="text"
          placeholder="Enter trip name"
          value={enteredTripName}
          style={tripNameErr ? { border: '1px solid red' } : {}}
          onChange={handleTripInputChange}
        />
        <button onClick={addTripOnClick}>Add Trip</button>
      </div>
      {tripNameErr && <span className="error">{tripNameErr}</span>}
    </div>
  );
};

export default CreateTrip;
