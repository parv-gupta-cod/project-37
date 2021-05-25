var canva, contestantCount, database, quiz, question, contestant, allContestant
var gameState=0

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){

if(contestantCount===4){
  quiz.update(1)
  quiz.play()
}
  
}
