const express = require("express");
const app = express();
const port = 4000;
const products = require("../products.json")

app.listen(port, () => {
    console.log("Server listening on port")
});

app.get("/api/products", (req, res) => {
    res.status(200).send(products);
})