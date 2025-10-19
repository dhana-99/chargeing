import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary example login
    if (email === "test@example.com" && password === "123456") {
      alert("Login successful!");
      navigate("/onboarding1");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
     <p>
     Don’t have an account?{" "}
  <Link to="/signup" style={styles.link}>
    Sign Up
  </Link>
</p>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial",
  },
  form: { display: "flex", flexDirection: "column", width: "250px" },
  input: { margin: "5px 0", padding: "8px" },
  button: { padding: "8px", marginTop: "10px" },
  link: { color: "blue", cursor: "pointer" },
};
