const axios = require('axios');
// button.onclick = calculate();

  export function calculate() {
    var resultBox = document.getElementById("resultBox");
    var text = document.getElementById("text");
    // var page = document.getElementById("page");
    

// Делаем запрос пользователя с данным ID
axios.get('https://www.codewars.com/api/v1/users/' + text.value)
  .then(function (response) {
    
    
      resultBox.innerHTML += "Логин пользвоателя: " + response.data.username + "<br />";
      resultBox.innerHTML += "Имя пользователя: " + response.data.name + "<br />";
      resultBox.innerHTML += "Очки чести: " + response.data.honor + "<br />";
      resultBox.innerHTML += "Клан: " + response.data.clan + "<br />";
      resultBox.innerHTML += "Позиция в рейтинговой таблице: " + response.data.leaderboardPosition + "<br />";
      // if (response.data.skills != null)
      for(var j = 0; j<response.data.skills.length; j++)
      {resultBox.innerHTML += "Языки программирования: " + response.data.skills[j] + "<br />";
      }
      resultBox.innerHTML += "Общий ранг: " + response.data.ranks.overall.rank + "<br />";
      resultBox.innerHTML += "Наименование ранга: " + response.data.ranks.overall.name + "<br />";
      resultBox.innerHTML += "Цвет ранга: " + response.data.ranks.overall.color + "<br />"; 
      resultBox.innerHTML += "Счет: " + response.data.ranks.overall.score + "<br />";
      for(var k = 0; k<Object.keys(response.data.ranks.languages).length;k++)
      {
        var key = Object.keys(response.data.ranks.languages)[k];
        resultBox.innerHTML += "Ранг языка " +key+ ": " + response.data.ranks.languages[key].rank + "<br />";
        resultBox.innerHTML += "Наименование ранга: " + response.data.ranks.languages[key].name + "<br />";
        resultBox.innerHTML += "Цвет ранга: " + response.data.ranks.languages[key].color + "<br />"; 
        resultBox.innerHTML += "Счет: " + response.data.ranks.languages[key].score + "<br />";
        resultBox.innerHTML += "<br />" ;
      }

      resultBox.innerHTML += "CodeChallenges: " + "<br />";
      resultBox.innerHTML += "Всего создано: " + response.data.codeChallenges.totalAuthored + "<br />";
      resultBox.innerHTML += "Всего выполнено: " + response.data.codeChallenges.totalCompleted + "<br />";
      resultBox.innerHTML += "<br />" ;
    
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });


  }

  window.calculate = calculate;

  var button = document.getElementById("button1");
button.addEventListener("click", calculate);