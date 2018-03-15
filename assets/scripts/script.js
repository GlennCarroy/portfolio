(function() {
			// Fake loading.
			setTimeout(init, 10);

			function init() {
				// document.body.classList.remove('loading');

				//************************ Example 1 - reveal on LOAD ********************************
				
				var rev1 = new RevealFx(document.querySelector('#rev-1'), {
					revealSettings : {
						bgcolor: '#25292f',
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev1.reveal();

				/* Pour la page About */
				var rev2 = new RevealFx(document.querySelector('#rev-2'), {
					revealSettings : {
						bgcolor: '#4ABDC2',
						direction: 'rl',
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev2.reveal();

				rev3 = new RevealFx(document.querySelector('#rev-3'), {
					revealSettings : {
						bgcolor: '	#25292f',
						delay: 200,
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev3.reveal();

				rev4 = new RevealFx(document.querySelector('#rev-4'), {
					revealSettings : {
						bgcolor: '#F47213',
						direction: 'rl',
						delay: 2000,
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev4.reveal();

				rev5 = new RevealFx(document.querySelector('#rev-5'), {
					revealSettings : {
						bgcolor: '#F0DC00',
						delay: 2500,
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev5.reveal();

				var	rev6 = new RevealFx(document.querySelector('#rev-6'), {
						revealSettings : {
							bgcolor: '#4ABDC2',
							direction: 'rl',
							delay: 4000,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
						}
					}
				});
				rev6.reveal();

				var	rev7 = new RevealFx(document.querySelector('#rev-7'), {
						revealSettings : {
							bgcolor: '#F47213',
							delay: 5000,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
						}
					}
				});
				rev7.reveal();

				//************************ reveal on SCROLL ********************************
				// var scrollElemToWatch_1 = document.getElementById('rev-2'),
				// 	watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300),				
				// 	rev2 = new RevealFx(scrollElemToWatch_1, {
				// 		revealSettings : {
				// 			bgcolor: '#4ABDC2',
				// 			direction: 'rl',
				// 			onCover: function(contentEl, revealerEl) {
				// 				contentEl.style.opacity = 1;
				// 			}
				// 		}
				// 	}),
				// 	rev3 = new RevealFx(document.querySelector('#rev-3'), {
				// 		revealSettings : {
				// 			bgcolor: '	#25292f',
				// 			delay: 250,
				// 			onCover: function(contentEl, revealerEl) {
				// 				contentEl.style.opacity = 1;
				// 			}
				// 		}
				// 	});

				// 	var scrollElemToWatch_2 = document.getElementById('rev-4'),
				// 	watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -300),				
				// 	rev4 = new RevealFx(scrollElemToWatch_2, {
				// 		revealSettings : {
				// 			bgcolor: '#F47213',
				// 			direction: 'rl',
				// 			onCover: function(contentEl, revealerEl) {
				// 				contentEl.style.opacity = 1;
				// 			}
				// 		}
				// 	}),
				// 	rev5 = new RevealFx(document.querySelector('#rev-5'), {
				// 		revealSettings : {
				// 			bgcolor: '#F0DC00',
				// 			delay: 500,
				// 			onCover: function(contentEl, revealerEl) {
				// 				contentEl.style.opacity = 1;
				// 			}
				// 		}
				// 	}),
				// 	rev6 = new RevealFx(document.querySelector('#rev-6'), {
				// 		revealSettings : {
				// 			bgcolor: '#4ABDC2',
				// 			direction: 'rl',
				// 			delay: 2000,
				// 			onCover: function(contentEl, revealerEl) {
				// 				contentEl.style.opacity = 1;
				// 			}
				// 		}
				// 	});
				// 	/*Activation du scroll Monitor */
				// 	watcher_1.enterViewport(function() {
				// 	rev2.reveal();
				// 	rev3.reveal();
				// 	watcher_1.destroy();
				// 	});
				// 	watcher_2.enterViewport(function() {
				// 	rev4.reveal();
				// 	rev5.reveal();
				// 	rev6.reveal();
				// 	watcher_2.destroy();
				// 	});
			}
		})();

/* ================================================= */



/* ======= Animation on Canvas for the skills ====== */


//initial setup
const canvas = document.querySelector("#skillscanvas");
const c = canvas.getContext("2d");


// Objects (qui seront générer ailleurs)
function rectangle(x , y , width , height, color, dh , maxH) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.dh = dh ; //vitesse d'agrandissement selon y
	this.maxH = maxH;

	this.draw = () => {
		//forme à générer
		c.fillStyle = this.color;
		c.fillRect( this.x , this.y , this.width , this.height );
	}

	this.update = () => {
		if (this.height == this.maxH) {
			this.dh = 0;
		}

		else {
			this.height += this.dh ;
		}
		this.draw();
	}
}

// Generation on screen avec les niveaux de compétence tableau
let rectangleArray;
let competence = [ -400 , -400 , -300 , -100 , -250 , -150 ];
function init() {
	rectangleArray = [];
	var X = 0 ;
	var height = -50 ;

	for (i = 0; i < 6; i++) {
		X += 80 ;
		rectangleArray.push(new rectangle( X , 400 , 65 , height , "white" , -5 , competence[i] ));
	}
}

//Animation loop
function animate() {
	requestAnimationFrame(animate);
	
	rectangleArray.forEach(rectangle => rectangle.update());

};

init();
animate();

		