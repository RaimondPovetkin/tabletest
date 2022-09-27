const express = require('express')
const router = require('./routes/routes')
const PORT = process.env.PORT || 8081

const app = express()

// app.get('/',(req,res) => {
//     res.send('welcome')
// })

app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`port: ${PORT}`)
})