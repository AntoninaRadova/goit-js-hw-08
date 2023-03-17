import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeupdate, 1000));

const SECONDS = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(SECONDS).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log(error.message);
            break;
        default:
            console.log(error.name);
            break;
        }
});

function onTimeupdate(e) {
        localStorage.setItem("videoplayer-current-time:", e.seconds);
}
