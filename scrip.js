var isPlaying = true;
var animatedSections = document.querySelectorAll('.animated-section span');
var playPauseBtn = document.querySelector('.play-pause-btn');
var muteMicIcon = document.querySelector('.mutemic');

muteMicIcon.style.display = 'none';

function togglePlayPause() {
    isPlaying = !isPlaying;

    if (isPlaying) {
        playPauseBtn.textContent = '⏸';
        animatedSections.forEach(function (section) {
            section.style.animationPlayState = 'paused';
            muteMicIcon.style.display = 'block';

        });
    } else {
        playPauseBtn.textContent = '▶️';
        animatedSections.forEach(function (section) {
            section.style.animationPlayState = 'running';
            muteMicIcon.style.display = 'none'; // Hide the mute icon
        });
    }
}
