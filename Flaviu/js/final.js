var myQuestions = [
  {
    question: "L`operation suivant 10/2? a quel resultat",
    answers: {
      a: '3',
      b: '5',
      c: '115'
    },
    correctAnswer: 'b'
  },
  {
    question: "L`operation suivant 100/10? a quel resultat",
    answers: {
      a: '3',
      b: '5',
      c: '10'
    },
    correctAnswer: 'c'
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var submitButton_1 = document.getElementById('submit_1');
var submitButton_2 = document.getElementById('submit_2');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton, submitButton_1);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton, submitButton_1){

  function showQuestions(questions, quizContainer){

    var output = [];
    var answers;


    for(var i=0; i<questions.length; i++){


      answers = [];


      for(letter in questions[i].answers){


        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }


      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }


    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){


    var answerContainers = quizContainer.querySelectorAll('.answers');

    var userAnswer = '';
    var numCorrect = 0;


    for(var i=0; i<questions.length; i++){


      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;


      if(userAnswer===questions[i].correctAnswer){

        numCorrect++;


        answerContainers[i].style.color = 'lightgreen';
      }

      else{

        answerContainers[i].style.color = 'red';
      }
    }


    for(var i=0; i<questions.length; i++){


      userAnswer_1 = (answerContainers[i].querySelector('input[name=question'+0+']:checked')||{}).value;


      if(userAnswer_1===questions[0].correctAnswer){

        numCorrect++;


        answerContainers[2].style.color = 'lightgreen';
      }

      else{
        answerContainers[0].style.color = 'red';
      }

    }

    resultsContainer.innerHTML = " Vous aveaz repondre correct aux: "+ numCorrect + " questions" + ' du ' + questions.length;
  }


  showQuestions(questions, quizContainer);


  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

  submitButton_1.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }



}
