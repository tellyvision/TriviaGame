$(document).ready(function() {
  var score = 0;
  var questions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"];
  var correctAnswers = ["a","c","b","c","d","b","c"];
  
  $("#startPage").show()
  $("#questionsContainer").hide()
  $("#results").hide()

//start quiz       
  // click on start buttton
  //begin timer
  //show questions
  $("#startPage").on("click", "#startButton", function(){
    $("#startPage").hide()
    $("#questionsContainer").show()
    $("#results").hide()     
  });

//show results 
  $("#submit").on("click", function(event) {
    event.preventDefault();
    var userInput =[]; 

    for (var i=0; i <= questions.length; i++){
      userInput.push(questions[i].val())
    }

    for (var i=0; i <= questions.length; i++){
      if (userInput[i] === correctAnswers[i]) {
          score++;
        }
      else (false);
    }
      
    $("#results").html("<h3>You got " + score + " out of 7 questions correct!</h3>")  

    $("#startPage").hide()
    $("#questionsContainer").hide()
    $("#results").show()  
  });

});

         








        














