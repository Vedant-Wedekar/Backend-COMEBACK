import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';
import cors from 'cors';

app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"50mb",extended:true}))
app.use(express.static('dist'))
app.use(cookieParser())
app.use(cors({credentials:true,origin:process.env.CLIENT_URL}))

// import routes
import { UserRouter } from './routes/user.routes.js';


// use routes
app.use('/api/v1/users',UserRouter);



export { app };
