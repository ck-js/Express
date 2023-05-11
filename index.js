const express = require("express");
const app = express();
const port = 5000;

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

app.get("/pets/:petName", (req,res) => {
    console.log(`The pets name is: ${req.params.petName}`);
})

app.get("/about", (req,res) => {
    console.log(`New request made: ${req.method}`);
    res.send("<h1>About</h1>");
});

app.get("/", (req, res) => {
    console.log(`New request made: ${req.method}`);
    res.status(200).send("<p>Successfull Request</p>")
});


app.get("/user", (req, res) => {
    console.log(`New request made: ${req.method}`);
    res.redirect("/userinfo");
    res.send("<h1>User Info</h1>");
});;



// app.get('/', (req, res) => {
//     res.send("Hello world, this is backend")
// })

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})