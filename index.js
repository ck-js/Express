const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request,response) => {
console.log(request)
});

app.get("/", (req, res) => {
    console.log(`New request made: ${req.method}`);
    console.log(`Hostname: ${req.hostname}`);
});

app.get("/flag/:country", (req, res) => {
    console.log(`New request made: ${req.method}`);
    console.log(`Country parameter: ${req.params.country}`)
});



// app.get('/', (req, res) => {
//     res.send("Hello world, this is backend")
// })

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})