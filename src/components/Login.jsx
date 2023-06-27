import { useState, useEffect } from "react";
import useFetchNew from "./services/useFetchNew";
import "./styles/login.css";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const apiUrl = "https://barbercackend.azurewebsites.net/login";

  const body = {
    login,
    password,
  };

  const [{ response, error, isLoading }, doFetch] = useFetchNew(apiUrl);

  const handleSubmit = (event) => {
    event.preventDefault();
    doFetch({
      method: "POST",
      headers: "Content-Type: application/json",
      data: JSON.stringify(body),
    });
  };

  useEffect(() => {
    if (response && response.token) {
      const apiKey = response.token;
      localStorage.setItem("api-key", apiKey);
      navigate("/admin");
    } else if (error) {
      alert("error");
    }
  }, [response, error, navigate]);

  return (
    <div className="login-container">
      <div className="login">
        <div className="login__image">
          <Tilt scale={1.1}>
            <img src="src\assets\img-01.webp" alt="Image" data-tilt />
          </Tilt>
        </div>
        <div className="login__form">
          <div className="login__header">Admin Login</div>
          <form onSubmit={handleSubmit}>
            <div className="input__wrapper">
              <input
                type="email"
                value={login}
                onChange={handleLoginChange}
                placeholder="Email"
                required
              />
              <span>
                <img
                  className="email"
                  src="src\assets\envelope-solid.svg"
                  alt="Email"
                />
              </span>
            </div>
            <div className="input__wrapper">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
              />

              <span>
                <img
                  className="email"
                  src="src\assets\lock-solid.svg"
                  alt="Email"
                />
              </span>
            </div>

            <button className="login__button" type="submit">
              Submit
            </button>
          </form>
          {isLoading && <p>Loading...</p>}
          {response && <p>Login successful!</p>}
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
