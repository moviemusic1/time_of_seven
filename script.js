// MOVIEMUSIC1

time();
setInterval(time, 1000);

function time() {
let date = new Date();
let seconds = (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()) * 7 * 77 * 77 / 86400;
let new_hours = 0, new_minutes = 0, new_seconds = 0;
while(seconds > 77 * 77) { new_hours++; seconds -= 77 * 77; };
while(seconds > 77) { new_minutes++; seconds -= 77; };

new_seconds = seconds.toFixed();

document.querySelector('.old_time').innerText = `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`;
document.querySelector('.new_time').innerText = `${new_hours}:${new_minutes < 10 ? '0' + new_minutes : new_minutes}:${new_seconds < 10 ? '0' + new_seconds : new_seconds}`;
}