import { useEffect, useState } from "react";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <div className="rooms">
      <h2>Available Rooms</h2>

      <div className="room-container">
        {rooms.map((room) => (
          <div key={room.id} className="card">
            <h3>{room.room_name}</h3>
            <p>₹{room.price} / night</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;