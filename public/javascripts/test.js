document.addEventListener("DOMContentLoaded", (qwe) => {
  const element = document.querySelector('form');
  element.addEventListener('submit', event => {
    event.preventDefault();
    let formData = new FormData(element);
    let formObject = formDataToObject(formData); //ПРОСТО берет форму и кладет в объект без отправки
    //place your code here
    

    //Отправка запроса начинается с этого перона
    $.ajax({
      type: "POST", //Тип запроса. ОТправляет в теле какие-то данные на сервер
      url: "/api", //Путь по которому отправляются данные на сервер...
      data: "name=" + formObject.name + "&text=" + formObject.text, //Тело запроса
      success: function (msg){ //Функция обработки в случае успеха
        alert( msg.text ); //окошко
      }
    });
  });     
});

function formDataToObject(formData){
  const answer = {};
  for(let entry of formData.entries()){
    answer[entry[0]] = entry[1];
  }
  return answer;
}
