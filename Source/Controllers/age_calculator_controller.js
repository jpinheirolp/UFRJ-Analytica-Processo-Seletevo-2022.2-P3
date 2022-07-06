 const calculate_age_date = (req,res) => {
    const {date} = req.query;
    const age = new Date().getFullYear() - new Date(date).getFullYear();
    res.send(`No ano ${date} você terá ${age} anos.`);
 }
const returns_today_date = (req,res) => {
      const today = new Date();
      res.send(`Hoje é ${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`);
}
 module.exports = {
   calculate_age_date,
   returns_today_date

};