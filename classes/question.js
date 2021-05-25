class Question{
   constructor(){ 
        this.title = createElement('h2')
        this.input = createInput("Name");
        this.input2= createInput("answer")
        this.button = createButton('Play');
        this.greeting = createElement('h3');
    }
   display(){
    background("pink");
    this.title.html("My Quiz");
    this.title.position(130, 0);
    
    text("which colour does rose have",150,200)
    text("1:White",150,220)
    text("2:red",150,240)
    text("3:black",150,260)
    text("4:blue",150,280)
    this.input.position(130, 160);
    this.button.position(250, 160);
    this.input2.position(400,160)
    this.button.mousePressed(() => {
    this.input.hide();
    this.input2.hide();
    this.button.hide();

    contestant.name = this.input.value();
    contestant.answer = this.input2.value();
      
    contestantCount+=1;
    contestant.index=contestantCount
    contestant.update()
    contestant.updateCount(contestantCount);
      
      this.greeting.html("Hello " + contestant.name )
      this.greeting.position(130, 160)
    });
   }
    hide() {
        this.input.hide()
        this.input2.hide()
        this.button.hide()
        this.greeting.hide()
      }
}