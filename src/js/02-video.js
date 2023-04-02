// import Player from "@vimeo/player";
// import throttle from "lodash.throttle";

// const currentTimeStorage = "videoplayer-current-time";

// const iframe = document.querySelector('iframe');
// const videoPlayer = new Player(iframe);

// videoPlayer.on('ended', function() {
//   videoPlayer.getCurrentTime().then(function(seconds) {
//     localStorage.setItem(currentTimeStorage, seconds);
//   });
// });

// const storedTime = localStorage.getItem(currentTimeStorage);
// if (storedTime) {
//   videoPlayer.setCurrentTime(parseFloat(storedTime));
// }


// videoPlayer.play();

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTimeStorage = 'videoplayer-current-time';

player.on('timeupdate', throttle(function() {
  player.getCurrentTime().then(function(seconds) {
    localStorage.setItem(currentTimeStorage, seconds);
  });
}, 1000));

const storedTime = localStorage.getItem(currentTimeStorage);
if (storedTime) {
  player.setCurrentTime(storedTime);
}

player.play();








// const iframe = document.querySelector('iframe');
// const player = new player(iframe);

// player.on('timeUpdate', throttle(onPlay, 1000));

// player.getCurrentTime().then(function(seconds) {
//     // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// });





















// const iframe = document.querySelector('iframe');
//     const player = new Vimeo.Player(iframe);

//     player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });

//     player.on('play', function(data) {
//         // data is an object containing properties specific to that event
//     });