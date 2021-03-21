import 'reflect-metadata'
import 'dotenv'
import express from 'express'
import routes from './routes'
import './database/connection'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(process.env.APP_PORT, () => console.log(`🔥 Server started on port ${process.env.APP_PORT}`))
