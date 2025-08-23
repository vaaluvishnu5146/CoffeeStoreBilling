import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Billing from "./pages/Billing";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import AppSettings from "./pages/AppSettings";
import Appbar from "./components/Appbar/Appbar";
import { useState } from "react";
import NotFound from "./pages/NotFound";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {!loggedIn && (
        <Routes>
          <Route
            index
            element={<Login handleLogin={() => setLoggedIn(true)} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      {loggedIn && (
        <>
          <Appbar />
          <Routes>
            <Route index element={<Billing />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/appSettings" element={<AppSettings />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
