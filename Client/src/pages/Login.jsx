import React from "react";
import { loginAdmin } from "../api/LoginApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../api/AuthService";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const token = await loginAdmin(formData);
      console.log(token);
      if (!token) {
        return;
      }

      localStorage.setItem("token", token);

      console.log(token);
      navigate("/protected");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ color: "white" }}>User Name</label>
        <br></br>
        <input
          type="text"
          name="user"
          value={formData.user}
          onChange={handleChange}
        ></input>
        <br></br>
        <label style={{ color: "white" }}>Password</label>
        <br></br>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        ></input>
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
