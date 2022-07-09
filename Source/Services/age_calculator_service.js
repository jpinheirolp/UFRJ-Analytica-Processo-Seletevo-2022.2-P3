function miliseconds_to_years (miliseconds) {
    var seconds = Math.floor(miliseconds / 1000),
     minutes = Math.floor(seconds / 60),
     hours   = Math.floor(minutes / 60),
     days    = Math.floor(hours / 24),
     months  = Math.floor(months / 30),
     years   = Math.floor(days / 365);
     return years;
  }
  
  const calculate_age_date = (req_json) => {
     const req_data  = req_json;
     const date_today = new Date();
     const birth_date = new Date(req_data.birthdate);
     const future_date = new Date(req_data.date);
     
     const age_today =  miliseconds_to_years(date_today - birth_date);
     
     const age_future = miliseconds_to_years(future_date - birth_date);
  
     const quote = `Olá ${req_data.name}! Você tem ${age_today} anos e em ${future_date.getDay()}/${future_date.getMonth()}/${future_date.getFullYear()} você terá ${age_future} anos.`;
 
     return {quote:quote, age_today:age_today, age_future:age_future};
  }

 const returns_today_date = () => {
       const today = new Date();
       const quote = `Hoje é ${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`
       return {quote:quote};
 }

  module.exports = {
    calculate_age_date,
    returns_today_date
 
 };