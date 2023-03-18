import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "../routes/allRoutes.js";
import dotenv from "dotenv";

dotenv.config();


// MONGOOSE STRICT QUERY
mongoose.set("strictQuery", false);


/**
 * 
 * PRODUCTION SERVER
 * 
 */

const createServer = () => {

    // CREATE AN APP INSTANCE FROM EXPRESS FRAMEWORK
    const app = express();

    // USE AN APP INSTANCE
    app.use(cors());
    app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));

    // ALL ROUTES
    app.use("/api/v1", router)

    return app;

};

// CONNECTING TO MONGODB MAIN DATABASE
const con = () => mongoose.connect(process.env.MONGODB_URL, {

    useNewurlparser: true,
    useUnifiedTopology: true

});

/**
 * 
 * TEST SERVER
 * 
 */

const createTestServer = () => {
    
    // CREATE AN APP INSTANCE FROM EXPRESS FRAMEWORK
    const app = express();

    // USE AN APP INSTANCE
    app.use(cors());
    app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));

    // ALL ROUTES
    app.use("/api/v1", router)

    // DEFINING PORT AND HOST
    const port = 4100;
    const host = process.env.HOST || "localhost";

    return app;

};

// CONNECTING TO MONGODB TEST DATABASE
const testCon = () => mongoose.connect(process.env.MONGODB_URL, {

useNewurlparser: true,
useUnifiedTopology: true

});

export { createServer, con, createTestServer, testCon };