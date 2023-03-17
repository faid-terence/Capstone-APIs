import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import routes from "./routes/allRoutes.js"
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express"
import swaggerDocumentation from "./helper/documentation.js";



// configure dotenv
dotenv.config()

// create a app instance

const app = express();

// use app instance

app.use(cors());
app.use(bodyParser.json());

// morgan for logs

if(process.env.NODE_ENV === "development") app.use(morgan());

// define ports and host

const host = process.env.HOST;
const port = process.env.PORT;

// database connection 
const con = () => mongoose.connect(process.env.MONGODB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
// use all routes
app.use("/api/v1", routes);

app.use('/documentation', swaggerUI.serve);
app.use('/documentation', swaggerUI.setup(swaggerDocumentation));



// listening to serve instance

const startServer = () => app.listen(port);

// Promise to await for con and server instance
 Promise.all([con(), startServer()])
     .then(() =>
     {
        console.log('Database Connected.....')
        console.log(`Server listening on port ${port}`)
     })
