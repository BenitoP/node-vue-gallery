import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import cors from 'cors'
import users from './src/routes/users'
import gallery from './src/routes/gallery'

if (!process.env.myapp_bucketname ||
    !process.env.myapp_secretAccessKey ||
    !process.env.myapp_accessKeyId ||
    !process.env.myapp_region ||
    !process.env.myapp_jwtPrivateKey
    ) {
        console.log('Please set all environment variables')
        process.exit(1)    
    }

mongoose.connect(`mongodb://localhost:${process.env.myapp_db_port}/${process.env.myapp_db_name}`)

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(users)
app.use(gallery)

const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
