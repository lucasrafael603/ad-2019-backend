import express from 'express'
import index from './routes/index'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.use(cors())
app.use(express.json())



app.use(index)
// app.get('/teste', (request, response) => {

//   return response.json({message: 'true'})

// })


app.listen(3333,  () => { console.log('Server started 🎇') })


