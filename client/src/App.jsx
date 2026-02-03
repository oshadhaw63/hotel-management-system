import {useState,useEffect} from 'react';
import Navbar from './Navbar';


function App(){
  const [rooms,setRooms]= useState([]);

  
  useEffect(()=>{
    fetch('http://localhost:5000/rooms')
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
      setRooms(data);
    })
    .catch(err=> console.error("Erorr fetching: ",err));


  },[])

  return (
    <div>
      <Navbar/>
      <h1>Hotel Booking Site</h1>
      <div className="room-list">
        {rooms.map((room) => (
          <div key={room.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={room.image} alt={room.name} />
            <h2>{room.name}</h2>
            <p>Price: ${room.price}</p>
            
          </div>
        ))}
      </div>

    </div>
  )
}

export default App;