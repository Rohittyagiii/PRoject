import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Users from "./pages/Users"; 
import { useState } from "react";

function App() {
    const [user, setUser] = useState(null); 
  const [users, setUsers] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Home setUser={setUser} />} />
      <Route path="/profile" element={<Profile setUsers={setUsers} />} />
     <Route path="/users" element={<Users users={users} />} />
    </Routes>
  );
}

export default App;