import { createTestServer, testCon } from "./app.js";

// CREATE A TEST APP INSTANCE FROM EXPRESS FRAMEWORK
const app = createTestServer();

// DEFINING PORT AND HOST
const port = 4100;
const host = process.env.HOST || "localhost";


// PROMISE TO AWAIT FOR SERVER AND MONGODB CONNECTION
Promise.all([testCon()])
.then(() => {
    console.log(`MongoDB connected... at ${process.env.MONGODB_URL}`);
    // console.log(`Server running at http://${host}:${port}`);
})
.catch((err) => {
    console.log(err);
});

export { app };
