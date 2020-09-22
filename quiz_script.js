var questions = [
    {
        prompt: "What is the capital of Poland? \n a: Warszawa \n b: Kraków \n c: Gdańsk",
        answer: "a"
    },
    {
        prompt: "How many countries use Euro as their currency? \n a: 15 \n b: 19 \n c: 7",
        answer: "b"
    },
    {
        prompt: "What is the capital of Australia? \n a: Sydney \n b: Canberra \n c: Melbourne",
        answer: "b"
    },
    {
        prompt: "How much is a dozen? \n a: 25 \n b: 20 \n c: 12",
        answer: "c"
    },
    {
        prompt: "In which year did Michael Jackson pass away? \n a: 2006 \n b: 2009 \n c: 2012",
        answer: "b"
    },
    {
        prompt: "How many planets are their in our solar system? (including Pluto). \n a: 9 \n b: 8 \n c: 7",
        answer: "a"
    },
    {
        prompt: "What is the name of the talking snowman in Disney's Frozen? \n a: Olaf \n b: Gandalf \n c: Harold",
        answer: "a"
    },
    {
        prompt: "In which year was the Microsoft XP operating system released? \n a: 1999 \n b: 2001 \n c: 2002",
        answer: "b"
    }
]


alert("Welcome to the quiz! To answer the questions, use your keyboard and write a, b or c and press OK.")

function run_quiz() {
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