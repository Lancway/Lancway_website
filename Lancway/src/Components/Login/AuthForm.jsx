import { useState } from "react";
import { signUp, login, logout } from "../../firebase/Auth";
import "./AuthForm.css";

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

  // Function to extract and format user name
  const formatUserName = (email) => {
    if (!email) return "";
    const namePart = email.split("@")[0]; // Extracts before '@'
    return namePart.charAt(0).toUpperCase() + namePart.slice(1) + " ";
  };

  return (
    <>
      <div className="auth-container">
        {user ? (
          <div className="welcome-container">
            <h2 className="welcome-message">
              Welcome, {formatUserName(user.email)}! 🎉
            </h2>
            <p className="welcome-text">
              You are now logged in. Explore and enjoy! 🚀
            </p>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <h2 className="form-title">
              {isLogin ? "Welcome Back! 👋" : "Join Us Today! 🚀"}
            </h2>

            <p className="form-subtext">
              {isLogin
                ? "Enter your credentials to continue your journey!"
                : "Sign up now and unlock exclusive benefits!"}
            </p>

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
              {isLogin ? "Log In" : "Create Account"}
            </button>

            <p
              className="toggle-auth-mode"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "New here? Create an account now! 🌟"
                : "Already a member? Log in instead! 🔐"}
            </p>
          </form>
        )}
      </div>
    </>
  );
};

export default AuthForm;
