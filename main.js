/*
var question_data;
*/

var position=0, test, test_status, content, current_question, choiceA, choiceB, choiceC, choiceD;
var questions = [
  [
    "כמה בלון יקנו לך?",
    "המון",
    "לא המון",
    "בלון הוא שם עצם ספיר, נא לתקן את נוסח השאלה",
    "מיאו"
  ],
  [
    "כמה קפה שתית היום?",
    "המון",
    "לא המון",
    "לא משנה, העיקר שהניסוח תקין",
    "אני חתול"
  ],
  [
    "כמה עיתון את/ה קורא/ת?",
    "המון",
    "לא המון",
    "אני קוראת רק את גרסת הפרינט, כי יש בה פחות שגיאות לשון",
    "אני חתול"
  ],
  [
    "מה את/ה עושה כשבאים אליך אורחים?",
    "אני נקטף/ת",
    "אני לא עושה כלום, אבל האורחים שטים עלי בסירה",
    "אני סגור/ה",
    "פעילות אחרת"
  ]
];

$(document).ready(function() {

function _(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = _("test");
  _("test_status").innerHTML = "שאלה "+(position+1)+ " מתוך " +questions.length;
  current_question = questions[position][0];
  choiceA = questions[position][1];
  choiceB = questions[position][2];
  choiceC = questions[position][3];
  choiceD = questions[position][4];
  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<input type='radio' name='choices' value='A'>"+choiceA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'>"+choiceB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'>"+choiceC+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'>"+choiceD+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
  alert("OK, we will");
}

window.addEventListener("load", renderQuestion, false);



/*

  question_data = "";
  $.getJSON("data.json", function(data) {
    $.each(data, function(key, value) {
      question_data += '<ul>';
      question_data += '<li>' + value.question + '</li>';
      question_data += '<li>' + value.answers[0] + '</li>';
      question_data += '<li>' + value.answers[1] + '</li>';
      question_data += '<li>' + value.answers[2] + '</li>';
      question_data += '<li>' + value.answers[3] + '</li>';
      question_data += '</ul>';
    });
    $('#question_div').push(question_data);
  });

console.log(question_data);


$.getJSON("data.json", function(data) {
    for (var i = 0; i < json.length; i++) {
      content = $('<div/>');
      content.push("<p id='question'>" + json[i].question + "</p>");
      content.push("<li>" + json[i].answers[0] + "</li>");
      content.push("<li>" + json[i].answers[1] + "</li>");
      content.push("<li>" + json[i].answers[2] + "</li>");
      content.push("<li>" + json[i].answers[3] + "</li>");

      $('#questions').push(content);
  }
});

*/
}); // /END OF MAIN FUNCTION
