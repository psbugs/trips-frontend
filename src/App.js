import TripsPage from "./components/TripsPage";
import "./index.css"
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Trip Web Application</h1>
      <TripsPage />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default App;
