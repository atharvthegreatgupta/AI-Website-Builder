const songs = [
    {
        id: 1,
        title: "SoundHelix Song 1",
        artist: "SoundHelix.com",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        id: 2,
        title: "SoundHelix Song 2",
        artist: "SoundHelix.com",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        id: 3,
        title: "SoundHelix Song 3",
        artist: "SoundHelix.com",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }
];

const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const currentSongInfo = document.getElementById('current-song-info');
const songListDiv = document.getElementById('song-list');

let currentPlayingSongId = null;
let isPlaying = false;

function renderSongs() {
    songListDiv.innerHTML = '';
    songs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.innerHTML = `
            <div class="song-info">
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <button class="song-button" data-id="${song.id}">${song.id === currentPlayingSongId && isPlaying ? 'Pause' : 'Play'}</button>
        `;
        songListDiv.appendChild(songItem);
    });
    addSongButtonListeners();
}

function addSongButtonListeners() {
    document.querySelectorAll('.song-button').forEach(button => {
        button.onclick = (event) => {
            const songId = parseInt(event.target.dataset.id);
            togglePlayPause(songId);
        };
    });
}

function togglePlayPause(songId) {
    const selectedSong = songs.find(s => s.id === songId);

    if (currentPlayingSongId === songId) {
        // Same song, just toggle play/pause
        if (isPlaying) {
            audioPlayer.pause();
            isPlaying = false;
            playPauseBtn.textContent = 'Play/Pause';
        } else {
            audioPlayer.play();
            isPlaying = true;
            playPauseBtn.textContent = 'Playing...';
        }
    } else {
        // New song selected, play it
        if (selectedSong) {
            audioPlayer.src = selectedSong.src;
            audioPlayer.play();
            isPlaying = true;
            currentPlayingSongId = songId;
            playPauseBtn.textContent = 'Playing...';
            currentSongInfo.textContent = `Playing: ${selectedSong.title} - ${selectedSong.artist}`;
        }
    }
    updateSongButtons();
}

function updateSongButtons() {
    document.querySelectorAll('.song-button').forEach(button => {
        const songId = parseInt(button.dataset.id);
        if (songId === currentPlayingSongId && isPlaying) {
            button.textContent = 'Pause';
            button.classList.add('playing');
        } else {
            button.textContent = 'Play';
            button.classList.remove('playing');
        }
    });
}

// Global play/pause button for the currently playing song
playPauseBtn.onclick = () => {
    if (currentPlayingSongId !== null) {
        togglePlayPause(currentPlayingSongId);
    } else {
        // If no song is selected, start with the first one
        if (songs.length > 0) {
            togglePlayPause(songs[0].id);
        }
    }
};

audioPlayer.onended = () => {
    isPlaying = false;
    playPauseBtn.textContent = 'Play/Pause';
    currentSongInfo.textContent = 'Not playing';
    currentPlayingSongId = null; // Reset current playing song
    updateSongButtons();
};

audioPlayer.onpause = () => {
    isPlaying = false;
    playPauseBtn.textContent = 'Play/Pause';
    // Do not reset currentSongInfo here, it should show last played
    updateSongButtons();
};

audioPlayer.onplay = () => {
    isPlaying = true;
    playPauseBtn.textContent = 'Playing...';
    updateSongButtons();
};

// Initial render
renderSongs();