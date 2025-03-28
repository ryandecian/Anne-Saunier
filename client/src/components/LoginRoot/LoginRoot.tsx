import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./LoginRoot.module.css";

function LoginRoot() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Identifiants incorrects.");
      }

      // 🔐 Stocker les infos utilisateur + token
      localStorage.setItem("jwtToken", data.jwt);
      localStorage.setItem("userId", data.id);
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userRole", data.role);
      localStorage.setItem("userName", `${data.firstname} ${data.lastname}`);

      // ✅ Rediriger vers la bonne page
      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/compte");
      }
    } catch (err: any) {
      console.error("Erreur login:", err);
      setError(err.message || "Erreur serveur.");
    }
  };

  return (
    <div className={style.LoginRoot}>
      <h1>Connexion 🔐</h1>
      <form onSubmit={handleLogin} className={style.form}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Se connecter</button>
        {error && <p className={style.error}>{error}</p>}
      </form>
    </div>
  );
}

export default LoginRoot;
