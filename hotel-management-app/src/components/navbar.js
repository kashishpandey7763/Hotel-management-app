import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h2>Hotel 🏨</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;