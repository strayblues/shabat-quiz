var question_num=0, test, test_status, current_question, choice, choices,
    choiceA, choiceB, choiceC, choiceD, userAnswers=[];
var questions = [
  [
    "להערכתך, כמה בלון יקנו לך?",
    "המון",
    "לא המון",
    "אומרים ״כמה בלונים״, לא ״כמה בלון״",
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
    "לא אומרים ״כמה״ על עיתון!",
    "חתולללל"
  ],
  [
    "הלכת לירקון. מה תעשה/י?",
    "אשב על הדשא ואקרא עיתון",
    "אשתה קפה מהתרמוס שהבאתי",
    "אבקש שיקנו לי בלון",
    "אשוב בחזרה"
  ],
  [
    "איך שיצאת מהמקלחת ראית ג׳וק ענק בפינה. מה תעשה/י?",
    "אמעך אותו עם עיתון",
    "אשפוך עליו המון קפה רותח",
    "אשחק איתו עד שימאס לי ואז אוכל אותו",
    "אהיה סגור/ה"
  ]
];

function _(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = _("test");
  _("test_status").innerHTML = "שאלה "+(question_num+1)+ " מתוך " +questions.length;
  current_question = questions[question_num][0];
  choiceA = questions[question_num][1];
  choiceB = questions[question_num][2];
  choiceC = questions[question_num][3];
  choiceD = questions[question_num][4];

  test.innerHTML = "<h2>"+current_question+"</h2>";
  test.innerHTML += "<label><input type='radio' name='choices' value='A'></input><h4>"+choiceA+"</h4></label>";
  test.innerHTML += "<label><input type='radio' name='choices' value='B'></input><h4>"+choiceB+"</h4></label>";
  test.innerHTML += "<label><input type='radio' name='choices' value='C'></input><h4>"+choiceC+"</h4></label>";
  test.innerHTML += "<label><input type='radio' name='choices' value='D'></input><h4>"+choiceD+"</h4></label><br>";
  test.innerHTML += "<label><button class='btn btn-play' id='next' onclick='storeUserAnswers()'>נקסט</button>";
}

function storeUserAnswers(){
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if(choices[i].checked){
      userAnswers.push(choices[i].value);
    }
  }
  if (question_num < questions.length-1) {
    question_num++;
    renderQuestion();
  }
  else {
    _("next").remove();
    $("#btn-result").show();
  }
}

function showResult(){
//  _("next").remove();
  alert('את/ה חתול');
//  if (question_num === questions.length){
//    calculateResult();
//  }
}
/*
function calculateResult(){
  alert('את/ה חתול');
}
*/
window.addEventListener("load", renderQuestion, false);
