

function updown(){
let hand = document.getElementById('updown');
setTimeout(function(){ //adding only for 10ms 
    hand.classList.add('animate');
}, 10); //10milliseconds

hand.classList.remove('animate');
}

function up(){
    let up = document.getElementById('up');
    setTimeout(function(){ //adding only for 10ms 
        up.classList.add('animate');
    }, 10); //10milliseconds
    
    up.classList.remove('animate');
    }
