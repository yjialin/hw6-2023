var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.addEventListener('DOMContentLoaded', function() {
	var video = document.getElementById('player1');
	video.autoplay = false;
	video.loop = false;
});

window.onload = function() {
	var video = document.getElementById('player1');
	var playButton = document.getElementById('play');
	var pauseButton = document.getElementById('pause');
	var slowDownButton = document.getElementById('slower');
	var speedUpButton = document.getElementById('faster');
	var skipButton = document.getElementById('skip');
	var muteButton = document.getElementById('mute');
	var volumeDisplay = document.getElementById('volume');
	var volumeSlider = document.getElementById('slider');
	var oldSchoolButton = document.getElementById('vintage');
	var originalButton = document.getElementById('orig');
	
	playButton.addEventListener('click', function() {
		video.play();
		volumeDisplay.textContent = (video.volume * 100).toFixed(0) + '%';
	});
	
	pauseButton.addEventListener('click', function() {
		video.pause();
	});
	
	slowDownButton.addEventListener('click', function() {
		video.playbackRate *= 0.9;
		console.log("New speed: " + video.playbackRate.toFixed(5));
	});
	
	speedUpButton.addEventListener('click', function() {
		video.playbackRate /= 0.9;
		onsole.log("New speed: " + video.playbackRate.toFixed(5));
	});
	
	skipButton.addEventListener('click', function() {
		if (video.currentTime < video.duration - 10) {
			video.currentTime += 10;
		} else {
			video.currentTime = 0;
		}
		console.log('Current location: ' + video.currentTime);
	});
	
	muteButton.addEventListener('click', function() {
		if (video.muted) {
			video.muted = false;
			muteButton.textContent = 'Mute';
			console.log('Unmuted');
		} else {
			video.muted = true;
			muteButton.textContent = 'Unmute';
			console.log('Muted');
		}
	});
	
	volumeSlider.addEventListener('change', function() {
		video.volume = this.value / 100;
		volumeDisplay.textContent = (video.volume * 100).toFixed(0) + '%';
		console.log('Volume: ' + video.volume);
	});
	
	oldSchoolButton.addEventListener('click', function() {
		video.classList.add('oldSchool');
		console.log('Old School');
	});
	
	originalButton.addEventListener('click', function() {
		video.classList.remove('oldSchool');
		console.log('Original');
	});

};
