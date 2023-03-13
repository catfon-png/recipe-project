import express, { Application } from 'express'

const app : Application = express();
const port = 5000;
app.use(express.json());


app.get('/api/recipes', (req, res) => {
    res.json({message: 'There is a recipe here'})
})



app.listen(port)
console.log(`App listening on ${port}`)