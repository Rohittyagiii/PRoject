import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

function Home({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    try {
      const res = await fetch("http://localhost:5000/api/addusers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);
      if (data.success === true) {
        //         localStorage.setItem("chotu", JSON.stringify(data.data));
        // sessionStorage.setItem("nunu", JSON.stringify(data.data));
        setUser(data.data); // ✅ send data via props
        navigate("/profile");
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
