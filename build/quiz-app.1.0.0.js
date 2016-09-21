/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
	    var Wine = {
	        currentQuestion: 0,
	        score: 0
	    };
	
	    var wine = Object.create(Wine);
	    var currentQuestion = 0;
	    var score = 0;
	
	    wine.questions = [{
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
	    }];
	
	    $('#nextquestion').click(function () {
	        var userInput = $('input:checked').val();
	        if (!userInput) {
	            alert("Answer Question");
	            return;
	        }
	        if (questions[currentQuestion].correctAnswer == userInput) {
	            score++;
	        }
	        currentQuestion++;
	        if (currentQuestion == questions.length) {
	            $('#score_wrapper span').text(score);
	            $('#question_wrapper').hide();
	            $('#score_wrapper').show();
	        } else updateView();
	    });
	    $('#restartquiz').click(function () {
	        currentQuestion = 0;
	        score = 0;
	        updateView();
	    });
	    function updateView() {
	        $('#questionMain').html(questions[currentQuestion].main);
	        $('#question_wrapper').show();
	        $('#score_wrapper').hide();
	
	        var radios = $('#questionAnswer span');
	        for (i = 0; i < 4; i++) {
	            var radio = $(radios[i]);
	            radio.text(questions[currentQuestion].answers[i]);
	        }
	    };
	    updateView();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=quiz-app.1.0.0.js.map