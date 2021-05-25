class Contestant{
        constructor(){
          this.name=null
          this.answer=null
          this.index=null
        }
      
        getCount(){
          var contestantCountRef = database.ref('contestantCount');
              contestantCountRef.on("value",function(data){
              contestantCount = data.val();
          })
        }
      
        updateCount(count){
          database.ref('/').update({
            contestantCount: count
          });
        }
      
        update(){
          var contestantIndex = "contestants/contestant" + this.index;
          database.ref(contestantIndex).set({
            name:this.name,answer:this.answer
          });
        }
        static getPlayerInfo(){
          database.ref("contestants").on("value",function(data){
            allContestant=data.val()
          })
        }
      }