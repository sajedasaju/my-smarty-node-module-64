//req
const express = require("express");
const app = express();
var cors = require('cors');
const port = process.nextTick.PORT || 5000;

app.use(cors());
app.use(express.json())

//route 1(api)
app.get('/', (req, res) => {
    res.send("Hello from my own personal smarty smarty  Pajama!!")
})

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@Gmail.com', phone: '017888888' },
    { id: 2, name: 'Shabnor', email: 'shabnor@Gmail.com', phone: '017888888' },
    { id: 3, name: 'Suchorita', email: 'suchorita@Gmail.com', phone: '017888888' },
    { id: 4, name: 'Suchonda', email: 'suchonda@Gmail.com', phone: '017888888' },
    { id: 5, name: 'Srabonti', email: 'srabonti@Gmail.com', phone: '017888888' },
    { id: 6, name: 'sabila', email: 'sabila@Gmail.com', phone: '017888888' },
    { id: 7, name: 'Sohana', email: 'sohana@Gmail.com', phone: '017888888' },
]

//route 2(api)
app.get('/users', (req, res) => {
    // res.send({ id: 1, name: "abdul alim", job: "khay shudhu halim" });

    //filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        console.log(matched)
        res.send(matched)
    }
    else {
        res.send(users);

    }

})

//route 3(api)
app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    //index wise search
    //const user=users[id]

    //id wise search
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

//route 4
app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
})

app.get('/fruits/mango/fazle', (Req, res) => {
    res.send("sour  flavor")
})

app.listen(port, () => {
    console.log("Listening to port ", port)
})
