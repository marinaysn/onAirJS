// Set the questions
const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonderwoman's real name?", "Dianna Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];


//start(quiz);


function start() {
    // initialize score
    let score = 0;

    // main game loop
    for (const [question, answer] of quiz) {
        const response = ask(question);
        check(response, answer);
    }
    // end of main game loop

    gameOver();

    // function declarations
    function ask(question) {
        return prompt(question);
    }

    function check(response, answer) {
        // check if answer is correct
        if (response === answer) {
            alert('Correct!');
            // increase score by 1
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver() {
        // At the end of the game, report the player's score
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}

function test() {
    const name = 'Alexa';
    let temp = document.getElementById('testBtn');

    temp.innerHTML = name.toUpperCase();

    temp = document.getElementById('testBtn1');
    // temp.innerHTML = name.length;
    // temp.innerHTML = name.charAt(3);
    // temp.innerHTML = name.indexOf('l');
    // temp.innerHTML = name.indexOf('L');
    // temp.innerHTML = name.includes('a');
    // temp.innerHTML = name.includes('z');
    //  temp.innerHTML = name.startsWith('A');
    //  temp.innerHTML = name.startsWith('a');
    // temp.innerHTML = name.concat(' Ninja');
    // temp.innerHTML = "cow".concat('boy');
    // temp.innerHTML = 'Java' + 'Script' + ' ' + 'Book';
    //temp.innerHTML = '            Alexa and Siri      '.trim();
    //  temp.innerHTML = ' \t\t Alexa and Siri \r'.trim();
    // temp.innerHTML = 'Alexa'.repeat(3);
    //temp.innerHTML = new Number(3);
    temp.innerHTML = new Number(3);

}

