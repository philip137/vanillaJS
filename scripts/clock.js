const js_clock_container = document.querySelector(".js-clock"),
      js_clock_title = js_clock_container.querySelector("h1")

function getCurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (hours < 10) hours = '0' + hours;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec
    js_clock_title.innerHTML = `${hours}:${min}:${sec}`
}
function init(){
    getCurrentTime()
    setInterval(getCurrentTime, 1000)
}
init()