// src/Components/AuthForm.jsx
import { useState } from "react";
import { signUp, login, logout } from "../firebase/Auth";
import "./Components.css";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let loggedInUser;
      if (isLogin) {
        loggedInUser = await login(email, password);
      } else {
        loggedInUser = await signUp(email, password);
      }
      setUser(loggedInUser);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <div className="auth-container">
      {user ? (
        <div className="welcome-container">
          <h2 className="welcome-message">Welcome, {user.email}</h2>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2 className="form-title">{isLogin ? "Login" : "Sign Up"}</h2>
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <p className="toggle-auth-mode" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </p>
        </form>
      )}
    </div>
  );
};

export default AuthForm;
