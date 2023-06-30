import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/admin.css";

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = localStorage.getItem("api-key");

    if (!apiKey) {
      navigate("/login");
    }
  }, [navigate]);

  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [uploadedFilesCount, setUploadedFilesCount] = useState(0);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files || event.target.files);

    if (files.length > 0) {
      console.log("Files uploaded: ", files);
      setIsFileUploaded(true);
      setUploadedFilesCount((prevCount) => prevCount + files.length);
    } else {
      console.log("Daniel, upload at least one file.");
      setIsFileUploaded(false);
      setUploadedFilesCount(0);
    }
  };

  const handleFileInputChange = (event) => {
    const files = Array.from(event.target.files);

    if (files.length > 0) {
      console.log("Files uploaded:", files);
      setIsFileUploaded(true);
      setUploadedFilesCount((prevCount) => prevCount + files.length);
    } else {
      console.log("Daniel, upload at least one file.");
      setIsFileUploaded(false);
      setUploadedFilesCount(0);
    }
  };

  return (
    <div className="add-image__wrapper">
      <label
        htmlFor="images"
        className="drop-container"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <span className="drop-title">
          {isFileUploaded
            ? `Files uploaded: ${uploadedFilesCount}`
            : "Drop image(s) here"}
        </span>
        or
        <input
          type="file"
          id="images"
          accept="image/*"
          multiple
          required
          onChange={handleFileInputChange}
        />
      </label>
    </div>
  );
};

export default AdminPanel;

// if api-key exists then render admin panel *
// nice to have: check if api-key valid using server endpoint (ask Danyaylo to add one)
// else redirecto to /Login
