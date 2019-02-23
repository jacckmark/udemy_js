var scores, roundScore, activePlayer, gamePlaying, winningScore, 
prevDice, prevDice2;

init();

//here using event listener to listen to click event on btn-roll element and running
//anonymous function
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
        //random number between 1 and 6
        var dice = Math.floor(Math.random() * 6 ) + 1;
        var dice2 = Math.floor(Math.random() * 6 ) + 1;

        //getting dice by class and write it to variable so when want to make changes 
        //you are changing properties of this variable
        var diceDOM = document.querySelector('.dice-1');
        var diceDOM2 = document.querySelector('.dice-2');
        //block makes dice visible (previously we set display to none), and also renders 
        //element in block (it looks like new paragraph)
        diceDOM.style.display = 'block';
        diceDOM2.style.display = 'block';
        //here setting dice image
        diceDOM.src = 'images/dice-' + dice + '.png';
        diceDOM2.src = 'images/dice-' + dice2 + '.png';

        if((dice === 6 && prevDice === 6) || (dice2 === 6 && prevDice2 === 6 )){
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }
        else if (dice !== 1 && dice2 != 1){
            roundScore += dice + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else{
            nextPlayer();
        }
        //assigning value of dice roll to a variable as previous dice roll
        prevDice = dice;
        prevDice2 = dice2;
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        //adding current score to global player score
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        winningInput = document.querySelector('.final-score').value;
        if (winningInput){
            winningScore = winningInput;
        }
        else{
            winningScore = 100;
        }
        if (scores[activePlayer] >= winningScore){
            gamePlaying = false;
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        }
        else{
            nextPlayer();
        }
    }
});

function nextPlayer(){
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1; 
    //set score to 0 when they roll 1
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    //removing and adding classes to html elements (here adding active class 
    //indicating active player)
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    //toggle removes when this class is present or adds when it is not present on
    //given element 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
}

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    //get document element like in css (beware when it gets more than one element then
    //only the first one will be changed), here selecting element by id
    //textContent changes text value in given element here setting number on dice
    //document.querySelector('#current-' + activePlayer).textContent = dice;

    //when we want to use some html code we can use innerHTML (here making text 
    //with dice value italic)
    //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

    //when we want to hide some element we use style and display method and set it to none
    //(here hiding dice which have not id but class)
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';

    //faster than queryselector (setting up text in selected by id elements)
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //setting up a game by removing winner classes, changing active player, changing
    //name of a winner player to regular name (when players wins he gets 'WINNER!' label)
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
} 
//on event we can also call normal function (not anonymous one) to do this simply pass this 
//function as parameter (beware do not use parenthesis (NO->functionName(), YES->functionName))
document.querySelector('.btn-new').addEventListener('click', init);
