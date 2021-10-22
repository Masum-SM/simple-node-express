const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())
const port = 5000

//  const handler = (req,res) =>{
//      res.send('Hello from Node');
//  }

//  app.get('/',handler)

app.get('/', (req, res) => {
    res.send('Hello from Node and express,i am learing you');
});

const users = [
    {
        id: 0,
        name: 'shabana',
        email: 'shabana@gamil.com',
        phone: '0479875344'
    },
    {
        id: 1,
        name: 'shohana',
        email: 'shohana@gamil.com',
        phone: '0479875344'
    },
    {
        id: 2,
        name: 'sanjida',
        email: 'sanjida@gamil.com',
        phone: '0479875344'
    },
    {
        id: 3,
        name: 'shabana',
        email: 'shabana@gamil.com',
        phone: '0479875344'
    },
]
// app.get('/users', (req, res) => {
//     res.send(users)
// })

app.get('/users', (req, res) => {
    // console.log(req.query)
    const search = req.query.search;
    if (search) {
        const rearchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(rearchResult)
    }
    else {
        res.send(users)
    }
})

//-------------------POST ----------------------
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//  dynamic user
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})



app.listen(port, () => {
    console.log('listening to port', port)
})