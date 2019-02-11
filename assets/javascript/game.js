$( document ).ready(function(){
// random number total
var Random=Math.floor(Math.random()*102+19)

//random number for each crystal
var num1= Math.floor(Math.random()*12+1)
var num2= Math.floor(Math.random()*12+1)
var num3= Math.floor(Math.random()*12+1)
var num4= Math.floor(Math.random()*12+1)

// player stats
var playerTotal= 0; 
var wins= 0;
var losses = 0;
    
//show magic number, wins losses and player total 
$('#wins').text(wins);
$('#losses').text(losses);
$('#magicNumber').text(Random);
$('#totalScore').text(playerTotal);
  
  // reset crystals, magic number and set player score to 0
  function reset(){
    Random=Math.floor(Math.random()*102+19);
    console.log(Random)
    $('#magicNumber').text(Random);
    num1= Math.floor(Math.random()*12+1);
    num2= Math.floor(Math.random()*12+1);
    num3= Math.floor(Math.random()*12+1);
    num4= Math.floor(Math.random()*12+1);
    playerTotal= 0;
    $('#totalScore').text(playerTotal);
    } 
  // add 1 to wins and reset game
  function youWon(){
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  // add 1 to losses and reset game
  function loser(){
    losses++;
    $('#losses').text(losses);
    reset()
  }
  //  click functions for crystals
    $('#crystal1').on ('click', function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
           //win if total equals magic number
        if (playerTotal == Random){
        youWon();
          }
           //lose if total is great than magic number
    else if ( playerTotal > Random){
    loser();
          }   
    })  
    $('#crystal2').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
        if (playerTotal == Random){
        youWon();
          }
        else if ( playerTotal > Random){
        loser();
          } 
    })  
    $('#crystal3').on ('click', function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);

        if (playerTotal == Random){
        youWon();
        }
        else if ( playerTotal > Random){
        loser();
        } 
    })  

    $('#crystal4').on ('click', function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
            if (playerTotal == Random){
            youWon();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  }); 