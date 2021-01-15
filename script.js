const astronaut = document.querySelector('.astronaut');
const background = document.querySelector('.background');

var p = document.querySelector('p')

document.addEventListener('keypress', increment, false);

function increment() {
   	var number = parseInt(p.innerText);
    number++;
    p.innerText = number;

}

var score = 0;
let isJumping = false;
let position = 0;
function handleKeyUp(event) {
	if(event.keyCode === 32){
		if(!isJumping){
		jump();
	}
}
}


function jump() {
	
	
	isJumping = true;
	let upInterval = setInterval(() => {
		if (position >= 350) {
		
		clearInterval(upInterval);
		
	
		let downInterval = setInterval(() => {
		if (position <= 0) {
			clearInterval(downInterval);
			isJumping = false;
		}else{ 
		position -= 20;
		astronaut.style.bottom = position + 'px';
		
		}
	}, 20);
	
	}else{
	position += 20;
	astronaut.style.bottom = position + 'px';
	}
  }, 20);
}

function points () {
	if (position >= 350){
		counter.style.text = score + 5;
	}else{
		counter.style.text = score + 0;
				
	}
}



function createAlien1() {
	const alien1 = document.createElement('div');
	let alien1Position = 1000;
	let randomTime = Math.random() * 10000;
	
	
	
	alien1.classList.add('alien1');
	alien1.style.left = 1000 + 'px';
	background.appendChild(alien1);
	
	let leftInterval = setInterval(() => {
		
	if(alien1Position < -60) {
	    clearInterval(leftInterval);
		background.removeChild(alien1);
	}else if(alien1Position > 0 && alien1Position < 60 && position <60){
		
		clearInterval(leftInterval);
		document.body.innerHTML = '<h1 class="game-over">Game Over</h1>';

	}else{ 
		alien1Position -= 10;
		alien1.style.left = alien1Position + 'px';
		
	}
  }, 20);
	
	
	setTimeout(createAlien1, randomTime);
	
	
}

function createAlien2() {
	const alien2 = document.createElement('div');
	let alien2Position = 900;
	let randomTime = Math.random() * 6000;
	
	
	
	alien2.classList.add('alien2');
	alien2.style.left = 1000 + 'px';
	background.appendChild(alien2);
	
	let leftInterval = setInterval(() => {
		
	if(alien2Position < -60) {
	    clearInterval(leftInterval);
		background.removeChild(alien2);
	}else if(alien2Position > 0 && alien2Position < 60 && position <60){
		
		clearInterval(leftInterval);
		document.body.innerHTML = '<h1 class="game-over">Game Over</h1>';

	}else{ 
		alien2Position -= 10;
		alien2.style.left = alien2Position + 'px';
		
	}
  }, 20);
	
	
	setTimeout(createAlien2, randomTime);
	
	
}

createAlien1();
createAlien2();


document.addEventListener('keyup', handleKeyUp);