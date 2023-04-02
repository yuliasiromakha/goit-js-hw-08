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