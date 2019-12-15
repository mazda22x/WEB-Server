var express = require('express');
var router = express.Router();
let count = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api', (req, res, next)=>{
  console.log(req, res, next);
  let {name,text} = req.body; //данные из тела запроса
  let answer = {status:"",text:""}; //переменная для ответа
  if(name&&text){
    count += 1;
    answer.status = 'success';
    answer.text = `${count}: ${text}`
    
  res.json(answer); //функция ответа. Отдали обратную
  } 
  else {
    answer.status = 'error';
    answer.text = 'Something wrong with name or text';
    
  res.status(500).json(answer); //Ответ в случае ошибки
  }
})
module.exports = router;
