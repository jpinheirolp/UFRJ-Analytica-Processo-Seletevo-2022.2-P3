const express = require("express"); 

const age_calculator_router = require("./Version1/Routes/age_calculator_router");
const album_info_router = require("./Version1/Routes/album_info_router");
const body_parser = require("body-parser");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.use("/api/version1/age", age_calculator_router);
app.use("/api/version1/album-info", album_info_router);



app.listen(PORT, () => { 
    console.log(`API escutando na porta ${PORT}`); 
});