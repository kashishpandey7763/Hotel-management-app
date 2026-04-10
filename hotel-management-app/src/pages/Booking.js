function Booking(){

return(

<div>

<h1>Room Booking</h1>

<form className="form">

<input type="text" placeholder="Enter Name"/>

<input type="email" placeholder="Enter Email"/>

<input type="date"/>

<select>
<option>Single Room</option>
<option>Double Room</option>
<option>Deluxe Room</option>
</select>

<button>Book Now</button>

</form>

</div>

)

}

export default Booking