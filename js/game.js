class Game {
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
       player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(bg, 0,-displayHeight*4,displayWidth, displayHeight*5);
        //var display_position = 100;
        
        //index of the array
        var index = 0;
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          if (index === player.index){
          //  mouseDragged();
            //mouseReleased();
            //keyPressed();
            console.log("Correct player");
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
     
  
      if(allPlayers.score > 10){
        gameState = 2;
      }
  
      drawSprites();
    }
    end(){
      var name  = database.ref('players/player');
    textSize(15);
    text(allPlayers[player].name + ": " + allPlayers[player].score, 120,display_position)
    }
  }
  