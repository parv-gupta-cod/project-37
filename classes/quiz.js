class Quiz{
    constructor(){
        
    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
       
    }
    update(state){
        database.ref('/').update({
          gameState: state
        });
    }
    async start(){
        if(gameState === 0){
          contestant = new Contestant();
          contestant.getCount();
          question = new Question()
          question.display();
        }
    }  

    play(){
      question.hide()
      background("green")
      textSize(20)
      text("correct answer:red",130,160)
      Contestant.getPlayerInfo()
      var y=200
      for(var plr in allContestant){
        if(allContestant[plr].answer==="2"){
          fill("red")
        }
        else{
          fill("black")
        }
        textSize(20)
        text(allContestant[plr].name+":"+allContestant[plr].answer,130,y)
        y=y+30
      }
    }

}