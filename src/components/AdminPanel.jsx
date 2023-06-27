import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./styles/admin.css";

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = localStorage.getItem("api-key");

    if (!apiKey) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="add-image__wrapper">
      <label htmlFor="images" className="drop-container">
        <span className="drop-title">Drop an image here</span>
        or
        <input type="file" id="images" accept="image/*" required />
      </label>
    </div>
  );
};

export default AdminPanel;

// if api-key exists then render admin panel *
// nice to have: check if api-key valid using server endpoint (ask Danyaylo to add one)
// else redirecto to /Login
