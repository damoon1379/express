const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

const userRouter = require('./index')



app.use('/',userRouter)
app.listen(3000)