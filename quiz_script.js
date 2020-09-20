var questions = [
    {
        prompt: "What is the capital of Poland? \n a: Warszawa \n b: Kraków \n c: Gdańsk",
        answer: "a"
    },
    {
        prompt: "How many countries use Euro as their currency? \n a: 15 \n b: 19 \n c: 7",
        answer: "b"
    }
]


alert("Welcome to the quiz! To answer the questions, use your keyboard and write a, b or c and press OK.")

var run_quiz = function() {
    var score = 0;
    for (let i = 0; i < questions.length; i++) {
        var response = window.prompt(questions[i].prompt);
        if (response == questions[i].answer) {
            score++;
            alert("Correct!");
        } else {
            alert("I'm sorry, that's not the correct answer!");
        }
    } alert(`You got ${score} out of ${questions.length} points.`);
} 
run_quiz();