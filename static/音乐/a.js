document.getElementById('playBtn').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.play();
});

document.getElementById('pauseBtn').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.pause();
});

document.getElementById('volumeControl').addEventListener('input', function() {
    var audio = document.getElementById('audio');
    audio.volume = this.value;
});

// 进度条控制
var progressBar = document.getElementById('progress-bar');
var audio = document.getElementById('audio');

audio.addEventListener('timeupdate', function() {
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
});

progressBar.addEventListener('click', function(e) {
    var offsetX = e.offsetX;
    var width = this.offsetWidth;
    var clickPercent = (offsetX / width) * 100;
    var newTime = (clickPercent / 100) * audio.duration;
    audio.currentTime = newTime;
});

// 下拉选择音乐
document.getElementById('musicSelect').addEventListener('change', function() {
    var audio = document.getElementById('audio');
    audio.src = this.value;
    audio.load();
    audio.play();
});