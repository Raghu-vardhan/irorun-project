import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../api/api";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const res = await loginApi({ username, password });

    if (!res.token) {
      setError(res.message || "Login failed");
      return;
    }

    // ✅ save token in context + localStorage
    login(res.token, res.storeName);

    // ✅ redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <h2>Store Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* IMPORTANT: type="button" */}
      <button type="button" onClick={handleLogin}>
        Login
      </button>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
