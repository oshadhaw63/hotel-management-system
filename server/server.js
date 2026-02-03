const express= require('express');
const app= express();

const rooms = [
    {id:1, name: 'Standard Room', price: 100},
    {id:2, name: 'Deluxe Room', price: 200},
    {id:3, name: 'Suite', price: 300},
];

app.get('/rooms',(req,res)=>{
    res.json(rooms);
})

app.get('/contact', (req, res) => {
    res.send("Contact us at hotel@test.com"); // <--- Don't forget the closing quote here!
});

app.listen(5000, ()=> {
    console.log('Server is running on port 5000');
});

