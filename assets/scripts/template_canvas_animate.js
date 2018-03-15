//initial setup
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;


//Variables 
const mouse = {
	x : innerWidth / 2,
	y : innerHeight / 2
};

const colors = [
	"red",
	"blue",
	"green",
	"lightblue",
];


//Event Listeners
addEventListener('mousemove', event => {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

addEventListener('resize', function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	//A chaque refresh, on reprend toute la fenêtre + on envoit la fonction init qui crée les cercles
	init();
});


// Utility function
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max-min+1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}

// function getDistance(x1 , y1 , x2 , y2) {
// 	let xDistance = x2 - x1 ;
// 	let yDistance = y2 - y1 ;

// 	return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2));
// 	//cf théorème de pytagore  
// 	//pour avoir la distance entre 2points


// Objects (qui seront générer ailleurs)
function Object(x , y , radius , color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;

	this.update = () => {
		this.draw();
	}

	this.draw = () => {
		//forme à générer
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
	}
}

// Generation on screen
let objects;
function init() {
	objects = []

	for (i = 0; i < 400; i++) {
		//Lui dire quoi dessiner ici. Ca n'apparaîtra pas à l'écran car on doit "l'animer pour ça"
		//objects.push(new Object(arguments));
	}
}

// Animation loop
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0,0, canvas.width, canvas.height);
	//--> Pour éviter les traînées des formes

	c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);
	
	// objects.forEach(object => {
		// object.update();
	// });
}

init();
animate();