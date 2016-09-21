$(document).ready(function() {
    var Wine = {
        currentQuestion: 0,
        score: 0
    };

    var wine = Object.create(Wine);


    wine.questions =[{
        main: "Which country is the world’s biggest red wine consumers?",
        answers: ['Italy', 'China', 'USA', 'France'],
        correctAnswer: 1,
        explaination: ""
    }, {
        main: "Why do women get drunk faster from wine than men?",
        answers: ['Smaller', 'Weigh less', 'Higher fat content', 'Drink more'],
        correctAnswer: 2,
        explaination: ""
    }, {
        main: "Which of these is NOT a type of wine?",
        answers: ['Cabernet', 'Brandy', 'Port', 'Rose'],
        correctAnswer: 1,
        explaination: ""
    }, {
        main: "What kind of wine contains the most antioxidants?",
        answers: ['Sangria', 'White wine', 'Rose', 'Red wine'],
        correctAnswer: 3,
        explaination: ""
    }, {
        main: "How long does an opened bottle of red wine last?",
        answers: ['24 hours', '1-2 days', '3-5 days', 'up to 10 days'],
        correctAnswer: 2,
        explaination: "Red wine last 3-5 days in a cool dark place with a cork. Sparkling wine lasts the least after being opened and is only good for 1-3 days in the fridge. Fortified wine and Bag-in-a-Box wine last the longest up to 28 days if stored properly."
    }]
    var currentQuestion = 0
    var score = 0
    $('#nextquestion').click(function() {
        var userInput = $('input:checked').val()
        if (!userInput){
            alert("Answer Question")
            return
        } 
        if (questions[currentQuestion].correctAnswer == userInput) {
            score++
        }
        currentQuestion++
        if (currentQuestion == questions.length) {
            $('#score_wrapper span').text(score) 
            $('#question_wrapper').hide()
            $('#score_wrapper').show()

        }
        else updateView()
    });
    $('#restartquiz').click(function() {
        currentQuestion = 0
        score = 0
        updateView()
    });
    function updateView() {
        $('#questionMain').html(questions[currentQuestion].main);
        $('#question_wrapper').show()
        $('#score_wrapper').hide()      
    
        var radios = $('#questionAnswer span');
        for (i = 0; i < 4; i++) {
            var radio = $(radios[i])
            radio.text(questions[currentQuestion].answers[i]);
        }


    };
updateView()

});
