import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile({ user, setUsers }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    age: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers((prev) => [...prev, form]);  

    navigate("/users");
  };

  return (
    <div>
      <h1>Profile Page</h1>

      <form onSubmit={handleSubmit}>
  <input
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="Enter your name"
  />
  <br /><br />

  <input
    name="email"
    value={form.email}
    onChange={handleChange}
    placeholder="Enter your email"
  />
  <br /><br />

  <input
    name="age"
    value={form.age}
    onChange={handleChange}
    placeholder="Enter your age"
  />
  <br /><br />

  <select
    name="gender"
    value={form.gender}
    onChange={handleChange}
  >
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
  <br /><br />

  <input
    name="address"
    value={form.address}
    onChange={handleChange}
    placeholder="Enter your address"
  />
  <br /><br />

  <button type="submit">Save Profile</button>
</form>
    </div>
  );
}  

export default Profile;