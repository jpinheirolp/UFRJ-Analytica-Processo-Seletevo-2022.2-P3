const express = require("express"); 
const version1_router = require("./Version1/Routes/index");

const app = express(); 
const PORT = process.env.PORT || 3000; 

// Somente para testar 
app.get("/", (req, res) => { 
    res.send("funfou "); 
}); 

app.use("/api/version1", version1_router);

app.listen(PORT, () => { 
    console.log(`API escutando na porta ${PORT}`); 
});