const express= require('express');
const cors=require('cors')
const app= express();

app.use(cors())

const rooms = [
    { 
        id: 1, 
        name: "Luxury Suite", 
        price: 500, 
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=60" 
    },
    { 
        id: 2, 
        name: "Standard Room", 
        price: 200, 
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60" 
    },
    { 
        id: 3, 
        name: "Family Room", 
        price: 350, 
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&auto=format&fit=crop&q=60" 
    }
];

app.get('/rooms',(req,res)=>{
    res.json(rooms);
})

app.get('/contact', (req, res) => {
    res.send("Contact us at hotel@test.com"); 
});

app.listen(5000, ()=> {
    console.log('Server is running on port 5000');
});

