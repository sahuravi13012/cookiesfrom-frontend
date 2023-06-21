import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/loginuser",
        postData
      );

      if (response.data.message === "Login successful") {
        const token = response.data.token;
        document.cookie = `token=${token}; path=/;`;
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          value={postData.email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={postData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
