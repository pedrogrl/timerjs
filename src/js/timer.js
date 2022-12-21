import Sounds from "./sounds.js";
const sound = Sounds();

export default function Timer({
   minutesDisplay,
   secondsDisplay,
   resetControls,
}) {

   let interval;
   let minutes = Number(minutesDisplay.innerHTML);

   function reset() {
      updateDisplay(minutes, 0);
      clearInterval(interval);
   }
   
   function updateDisplay(newMinutes, seconds) {
      newMinutes = newMinutes === undefined ? minutes : newMinutes
      seconds = seconds === undefined ? 0 : seconds
      minutesDisplay.innerHTML = String(newMinutes).padStart(2, "0");
      secondsDisplay.innerHTML = String(seconds).padStart(2, "0");
   }

   function countdown() {
      interval = setInterval(() => {
         let minutes = Number(minutesDisplay.innerHTML);
         let seconds = Number(secondsDisplay.innerHTML);

         const isFinished = minutes <= 0 && seconds <= 0

         updateDisplay(minutes, 0);

         if (isFinished) {
            resetControls();
            updateDisplay();
            reset();
            sound.kitchenTimer.play();
            return;
         }

         if (seconds <= 0) {
            minutes--;
            seconds = 60;
         }

         updateDisplay(minutes, String(seconds - 1));
      }, 1000);
   }

   function updateMinutes(newMinutes) {
      minutes = newMinutes
   }

   function pause() {
      clearInterval(interval);
   }

   return {
      updateDisplay,
      countdown,
      reset,
      updateMinutes,
      pause
   };
}