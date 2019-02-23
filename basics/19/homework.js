(function (){
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    } 
    
    Question.prototype.askQuestions =
    function (){
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++){
            console.log(i + '. ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = 
    function (ans, callback){
        var score;
        if (ans === this.correct){
            console.log('Correct!');
            score = callback(true);
        }
        else{
            console.log('Not correct!');
            score = callback(false);
        }
        this.displayScore(score);
    }

    Question.prototype.displayScore =
    function(score){
        console.log("Your score: " + score);
    }

    var question1 = new Question('What\'s your favourite color?', ['red', 'blue', 
    'magenta'], 2);
    var question2 = new Question('What\'s your favourite actor?', ['Spacey', 
    'Depardieu', 'Cusack'], 1);
    var question3 = new Question('What\'s your favourite food?', ['I don\'t eat ' 
    + 'at all','spaghetti', 'meatballs'], 0);
    var allQuestions = [question1, question2, question3];

    function score(){
        var sc = 0;
        return function(correct) {
            if (correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion(){
        var lottery = Math.floor(Math.random() * allQuestions.length);
        allQuestions[lottery].askQuestions();
        var answer = prompt('Please select the correct answer!(type a number' 
        + ' from 1 to 3)');
        if (answer !== 'exit'){
            allQuestions[lottery].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();

