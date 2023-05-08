const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


const chefs = require('./Data/Chef.json') 
app.use(cors());
app.get('/', (req, res)=>{
    res.send('the menu is running')
})
app.get('/chefs', (req, res)=>{
    res.send(chefs)
})
app.get('/chefs/:id', (req, res)=>{
    const id = req.params.id;
    const selectedChefs = chefs.find(chef => chef.id == id) ;
    res.send(selectedChefs)
})
app.listen(port, ()=>{
    console.log(`Menu API is running on port ${port}`);
})