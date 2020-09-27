var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//showing the top 10 scores in high scores
const MAX_HIGH_SCORES = 10;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };

    //pushes the HS 
    highScores.push(score);
    //sorts it from high to low. 
    highScores.sort((a, b) => b.score - a.score);
    //pulls only the top 10
    highScores.splice(10);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('../StevenCodingQuiz.github.io/index.html');
};
