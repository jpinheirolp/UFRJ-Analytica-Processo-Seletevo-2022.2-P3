const age_calculator_service = require("../Services/age_calculator_service");

 const calculate_age_date = (req,res) => {
 
    const future_age = age_calculator_service.calculate_age_date(req.body);

    res.json(future_age);
 }
const returns_today_date = (req,res) => {
      const today_date = age_calculator_service.returns_today_date();
      res.json(today_date);
}
 module.exports = {
   calculate_age_date,
   returns_today_date

};