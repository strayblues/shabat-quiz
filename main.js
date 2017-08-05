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
  test.innerHTML = "<h3>"+current_question+"</h3>";
  test.innerHTML += "<input type='radio' name='choices' value='A'>"+choiceA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'>"+choiceB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'>"+choiceC+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'>"+choiceD+"<br><br>";
}

function checkAnswer(){
  alert("OK, we will");
}

window.addEventListener("load", renderQuestion, false);

}); // /END OF MAIN FUNCTION
