 // Example video data - in real app this can come from an API or JSON file
 const videos = {
    "1": {
      title: "Sample Video 1",
      description: "This is the first sample video.",
      url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    "2": {
      title: "Sample Video 2",
      description: "This is the second sample video.",
      url: "https://www.w3schools.com/html/movie.mp4"
    }
  };

  // Get video id from URL, e.g. video.html?id=1
  const urlParams = new URLSearchParams(window.location.search);
  const videoId = urlParams.get('id');

  const video = videos[videoId];

  if (video) {
    document.getElementById('video-title').textContent = video.title;
    document.getElementById('video-description').textContent = video.description;
    const player = document.getElementById('video-player');
    player.src = video.url;
    player.load();
  } else {
    document.getElementById('video-title').textContent = "Video not found";
    document.getElementById('video-description').textContent = "";
    document.getElementById('video-player').style.display = 'none';
  }