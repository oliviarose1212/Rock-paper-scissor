let score =JSON.parse(localStorage.getItem('score'));
          if(score===null){
            score={
              wins:0,
              losses:0,
              ties:0
            };
          }
          updateScoreElement();
          
          let isAutoPlaying = false;
          let intervalID;
          document.querySelector('.js-autoplay-button').addEventListener('click',()=>{
            autoPlay();
          });
          document.body.addEventListener('keydown',(event)=>{
            if(event.key==='a'){
            autoPlay();}
          });


          function autoPlay(){
            if(!isAutoPlaying){
              intervalID=setInterval(()=>{
                const playerMove = pickComputerMove();
                playGame(playerMove);
              },1000);
              document.querySelector('.js-autoplay-button').innerHTML='Stop Playing';
              isAutoPlaying = true;
             } else {
                clearInterval(intervalID);
                document.querySelector('.js-autoplay-button').innerHTML='Auto Play';
                isAutoPlaying=false;
             }
            
            
          }
          updateScoreElement();
          document.querySelector('.js-rock-button').addEventListener('click',()=>{
            playGame('Rock');
          });
          document.querySelector('.js-paper-button').addEventListener('click',()=>{
            playGame('Paper');
          });
          document.querySelector('.js-scissors-button').addEventListener('click',()=>{
            playGame('Scissors');
          });
          document.body.addEventListener('keydown',(event)=>{
            if(event.key==='r') {
              playGame('Rock');
            } else if(event.key==='p') {
              playGame('Paper');
            } else if(event.key==='s') {
              playGame('Scissors');
            }
          });
          document.querySelector('.js-reset-score-button').addEventListener('click',()=>{
            document.querySelector('.js-message').innerHTML=`Are you sure you want to reset the score? <button class="js-yes-button">Yes</button> <button class="js-no-button">No</button>`;
            document.querySelector('.js-yes-button').addEventListener('click',()=>{
              score.wins=0;
              score.losses=0;
              score.ties=0;
              localStorage.removeItem('score');
              updateScoreElement();
              document.querySelector('.js-message').innerHTML='';
            });
            document.querySelector('.js-no-button').addEventListener('click',()=>{
              
              document.querySelector('.js-message').innerHTML='';
            });
            
          });
          

          document.body.addEventListener('keydown',(event)=>{
            if(event.key==='Backspace'){
              document.querySelector('.js-message').innerHTML=`Are you sure you want to reset the score? <button class="js-yes-button button">Yes</button> <button class="js-no-button button">No</button>`;}
            document.querySelector('.js-yes-button').addEventListener('click',()=>{
              score.wins=0;
              score.losses=0;
              score.ties=0;
              localStorage.removeItem('score');
              updateScoreElement();
              document.querySelector('.js-message').innerHTML='';
            });
            document.querySelector('.js-no-button').addEventListener('click',()=>{
              
              document.querySelector('.js-message').innerHTML='';
            });
            
          });

        
          
          function playGame(playerMove){
            const computerMove=pickComputerMove();
       let result='';
       if(playerMove==='Scissors'){
       if (computerMove==='Rock'){
          result='You Lose';
       } else if (computerMove ==='Paper'){
           result='You Win';
       } else if (computerMove==='Scissors'){
           result='Tie';
       }} else if(playerMove==='Paper'){
        if (computerMove==='Rock'){
          result='You Win';
       } else if (computerMove ==='Paper'){
           result='Tie';
       } else if (computerMove==='Scissors'){
           result='You Lose';
       }
       } else if(playerMove==='Rock'){
        if (computerMove==='Rock'){
           result='Tie';
        } else if (computerMove ==='Paper'){
            result='You Lose';
        } else if (computerMove==='Scissors'){
            result='You Win';
        }
       }
       if(result === 'You Win'){
        score.wins++;
       } else if(result === 'You Lose'){
        score.losses++;
       } else if(result === 'Tie'){
        score.ties++;
       }
        localStorage.setItem('score',JSON.stringify(score));
        updateScoreElement();
        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML =` You
        <img src="${playerMove}-emoji.png" class="move-icon">
        <img src="${computerMove}-emoji.png" class="move-icon">
        Computer`;

       
          }
          function updateScoreElement(){
            document.querySelector('.js-score').innerHTML= `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
          }
          
                function pickComputerMove(){
                  const randomNumber=Math.random();
          
          if(randomNumber>=0 && randomNumber<1/3){
            computerMove='Rock';}
          else if(randomNumber>=1/3 && randomNumber<2/3){
            computerMove='Paper';
          }
          else if(randomNumber>=2/3 && randomNumber<1){
            computerMove='Scissors';
          }

          return computerMove;
            }