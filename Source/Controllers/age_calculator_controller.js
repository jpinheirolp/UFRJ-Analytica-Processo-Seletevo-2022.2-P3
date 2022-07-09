const age_calculator_service = require("../Services/age_calculator_service");

 const calculate_age_date = (req,res) => {
    req_body = req.body;
    if (!req_body.birthdate) {
         res.status(400).json({error: "Dados insuficientes campo birthdate é obrigatório"});
    }
    if (!req_body.date) {
      res.status(400).json({error: "Dados insuficientes campo date é obrigatório"});
   }
   if (!req_body.name) {
      res.status(400).json({error: "Dados insuficientes campo name é obrigatório"});
   }
   const future_date = new Date(req_body.date)
   if(!(future_date instanceof Date) || isNaN(future_date.valueOf())) {
      res.status(400).json({error: "formato data inválida, campo date deve ser no formato dd/mm/yyyy"});
   }
   const birth_date = new Date(req_body.birthdate)
   if(!(birth_date instanceof Date) || isNaN(birth_date.valueOf())) {
      res.status(400).json({error: "formato data nascimento inválida, campo bithdate deve ser no formato dd/mm/yyyy"});
   }
   
   if (future_date <= new Date()) {
      
      res.status(400).json({error: "Data deve ser no futuro, campo date deve possuir valor maior que a data atual"});
   }

    const future_age = age_calculator_service.calculate_age_date(req.body);

    res.status(201).json(future_age);
 }

   const returns_today_date = (req,res) => {
      const today_date = age_calculator_service.returns_today_date();
      res.status(201).json(today_date);
}

 module.exports = {
   calculate_age_date,
   returns_today_date

};