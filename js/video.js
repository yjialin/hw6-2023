var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// Initialize the video element and turn off autoplay and turn off looping.


document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('player1');
    video.autoplay = false;
    video.loop = false;
});

window.onload = function() {
    // Access the video and button elements
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




    // Event listener for the play button
    playButton.addEventListener('click', function() {
        video.play();
		volumeDisplay.textContent = (video.volume * 100).toFixed(0) + '%';
    });

	
	// Event listener for the pause button
	pauseButton.addEventListener('click', function() {
        video.pause();
    });

	// Event listener for the slow down button
	// Event listener for the slow down button
    slowDownButton.addEventListener('click', function() {
        // Decrease the playback speed by 10%
        video.playbackRate *= 0.9;

        // Log the new speed to the console
        console.log('New playback speed: ' + video.playbackRate);
    });

	// Event listener for the speed up button
	speedUpButton.addEventListener('click', function() {
        // Increase the playback speed by the inverse of 0.9
        video.playbackRate /= 0.9;

        // Log the new speed to the console
        console.log('New playback speed: ' + video.playbackRate.toFixed(5));
    });

	// Event listener for the skip button
    skipButton.addEventListener('click', function() {
        // Calculate the new time
        var newTime = video.currentTime + 10;

        // Check if the new time exceeds the video length
        if (newTime >= video.duration) {
            video.currentTime = 0; // Reset to start
        } else {
            video.currentTime = newTime;
        }

        // Log the current location of the video
        console.log('Current video time: ' + video.currentTime + ' seconds');
    });

	// Event listener for the mute button
    muteButton.addEventListener('click', function() {
        // Toggle the mute state
        video.muted = !video.muted;

        // Update the button text based on the mute state
        muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    });

	// Event listener for the volume slider
    volumeSlider.addEventListener('input', function() {
        // Change the video volume
        // The slider value is between 0 and 100, but the video volume property expects a value between 0.0 and 1.0
        video.volume = volumeSlider.value / 100;

        // Update the volume display
        volumeDisplay.textContent = volumeSlider.value + '%';
    });
	// Event listener for the old school style button
    oldSchoolButton.addEventListener('click', function() {
        video.classList.add('oldSchool');
    });

    // Event listener for the original style button
    originalButton.addEventListener('click', function() {
        video.classList.remove('oldSchool');
    });

};
