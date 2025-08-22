import { useState } from "react";

const CreateTrip = () => {
  const [enteredTripName, setEnteredTripName] = useState("");
  const [tripNameErr, setTripNameErr] = useState("");

  const addTripOnClick = async () => {
    if (!enteredTripName.trim()) {
      setTripNameErr("Please enter a valid trip name.");
      return;
    }
    setTripNameErr("");
    console.log('process.env.REACT_APP_API_URL',process.env.REACT_APP_API_URL)
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}api/trips/add-trip`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: enteredTripName }),
      });

      if (!res.ok) throw new Error("Failed to post data");

      await res.json();
      setEnteredTripName("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="create-trip">
      <div className="input-row">
        <input
          type="text"
          placeholder="Enter trip name"
          value={enteredTripName}
          onChange={(e) => setEnteredTripName(e.target.value)}
        />
        <button onClick={addTripOnClick}>Add Trip</button>
      </div>
      {tripNameErr && <span className="error">{tripNameErr}</span>}
    </div>
  );
};

export default CreateTrip;
