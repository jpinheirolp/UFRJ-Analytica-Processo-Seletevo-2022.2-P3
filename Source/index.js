const express = require("express"); 

const age_calculator_router = require("./Version1/Routes/age_calculator_router");
const body_parser = require("body-parser");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(body_parser.json());
app.use("/api/version1/age_calculator", age_calculator_router);




app.listen(PORT, () => { 
    console.log(`API escutando na porta ${PORT}`); 
});