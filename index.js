const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')
const btnSoundOn = document.querySelector('.sound-on')
const btnSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.innerHTML)
let timer;

btnPlay.addEventListener('click', playHandle)
btnPause.addEventListener('click', pauseHandle)
btnStop.addEventListener('click', resetControls)
btnSoundOff.addEventListener('click', soundOffHandle)
btnSoundOn.addEventListener('click', soundOnHandle)
btnSet.addEventListener('click', setHandle)

function resetControls() {
   btnPlay.classList.remove('hidden')
   btnPause.classList.add('hidden')

   btnSet.classList.remove('hidden')
   btnStop.classList.add('hidden')

   resetTimer()
}

function updateTimerDisplay(minutes, seconds) {
   minutesDisplay.innerHTML = String(minutes).padStart(2, "0")
   secondsDisplay.innerHTML = String(seconds).padStart(2, "0")
}

function resetTimer() {
   updateTimerDisplay(minutes, 0)
   clearInterval(timer)
}

function countdown() {
   timer = setInterval(() => {
      let minutes = Number(minutesDisplay.innerHTML)
      let seconds = Number(secondsDisplay.innerHTML)

      updateTimerDisplay(minutes, 0)
      
      if (minutes <= 0) {
         resetControls()
         return;
      };

      if (seconds <= 0) {
         minutes--
         seconds = 60
      };
      
      updateTimerDisplay(minutes, String(seconds - 1))
   }, 1000);
}

function playHandle() {
   btnPlay.classList.add('hidden')
   btnPause.classList.remove('hidden')

   btnSet.classList.add('hidden')
   btnStop.classList.remove('hidden')

   countdown();
}

function pauseHandle() {
   btnPause.classList.add('hidden')
   btnPlay.classList.remove('hidden')

   clearInterval(timer)
}

function soundOffHandle() {
   btnSoundOn.classList.remove('hidden')
   btnSoundOff.classList.add('hidden')
}

function soundOnHandle() {
   btnSoundOn.classList.add('hidden')
   btnSoundOff.classList.remove('hidden')
}

function setHandle() {
   const newMinutes = prompt('Minutes:')
   if (!newMinutes) {
      return;
   }
   minutes = newMinutes
   updateTimerDisplay(minutes, 0)
}