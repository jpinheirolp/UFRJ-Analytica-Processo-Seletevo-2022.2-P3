const express = require("express"); 
const version1_router = require("./Version1/Routes/index");
const age_calculator_router = require("./Version1/Routes/age_calculator_router");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use("/api/version1/age_calculator", age_calculator_router);

app.use("/api/version1", version1_router);

app.listen(PORT, () => { 
    console.log(`API escutando na porta ${PORT}`); 
});