var position=0, test, test_status, current_question, choice, choices,
    choiceA, choiceB, choiceC, choiceD, userAnswers=[];
var questions = [
  [
    "להערכתך, כמה בלון יקנו לך?",
    "המון",
    "לא המון",
    "בלון הוא שם עצם ספיר, יש לתקן את נוסח השאלה",
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
  test.innerHTML = "<h2>"+current_question+"</h2>";
  test.innerHTML += "<h4><input type='radio' name='choices' value='A'>"+choiceA+"</h4>";
  test.innerHTML += "<h4><input type='radio' name='choices' value='B'>"+choiceB+"</h4>";
  test.innerHTML += "<h4><input type='radio' name='choices' value='C'>"+choiceC+"</h4>";
  test.innerHTML += "<h4><input type='radio' name='choices' value='D'>"+choiceD+"</h4><br>";
  test.innerHTML += "<button onclick='storeUserAnswers()'>נקסט</button>";
}

function storeUserAnswers(){
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if(choices[i].checked){
      userAnswers.push(choices[i].value);
    }
  }
  //return userAnswers;
  position++;
  renderQuestion();
}

/*
function calculateResult(){

}

function showResult(){
  storeUserAnswers();
  calculateResult();
}
*/
window.addEventListener("load", renderQuestion, false);
