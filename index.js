
const secretNumber=Math.trunc( Math.random()*20)+1;
let score=20;
let highScore=0

const showMessage= function(message){
    document.querySelector('.message').textContent= message
};


const showScore=function(score){
    document.querySelector('.score').textContent=score
}

// for check button
document.querySelector('.check').addEventListener
('click', function (){
     const guess= Number(document.querySelector('.guess').value);
    console.log(guess);
//when input is empty
    if(!guess) {
       showMessage( 'No number') }

//when player wins the game
       else if (guess === secretNumber){
            showMessage('Correct Number');
            document.querySelector('.number').textContent=secretNumber
            document.querySelector('body').style.backgroundColor='rgb(39, 92, 39)'

            //highscore setting
            if(score>highScore){
                highScore=score
                document.querySelector('.highScore').textContent=highScore
            }
          }   
 //when guess is wrong or different
       else if (guess!== secretNumber){
        if(score>1){
           showMessage(  guess>secretNumber?'Too High!': 'Too Low' )
           score=score-1;
            showScore(score)}
        else{
           showMessage(`You lost the Game!`)                                                
            document.querySelector('.score').textContent=0 }
       }         
    }
);

//for reseting game
document.querySelector('.again').addEventListener
('click', function(){     
       showScore(20)
        document.querySelector('.number').textContent='?'
        showMessage(' Start guessing...')
        document.querySelector('.guess').value='';    
    }
);








// //when guess is too high
//          else if(guess>secretNumber) {
//             if(score>1){
//                 document.querySelector('.message').textContent='Too High!' ;
//                 score=score-1;
//                 document.querySelector('.score').textContent=score
//                 }
//             else{
//                 document.querySelector('.message').textContent=`You lost the Game!
//                                                                 Try agin...`   ;  
//                 document.querySelector('.score').textContent=0
//               }
//             }
// //when guess too low
// else if (guess<secretNumber){ 
//     if(score>1) {
//         document.querySelector('.message').textContent='Too Low!';
//     score=score-1;
//     document.querySelector('.score').textContent=score
//     }
//     else{
//         document.querySelector('.message').textContent= `You lost the game!
//                                                                            Try again...`
//         document.querySelector('.score').textContent=0
//     }   
// }

