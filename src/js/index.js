import Timer from "./timer.js";
import Controls from "./controls.js";
import {
   btnPlay,
   btnPause,
   btnStop,
   btnSet,
   btnSoundOn,
   btnSoundOff,
   minutesDisplay,
   secondsDisplay,
} from "./elements.js";

const controls = Controls({
   btnPlay,
   btnPause,
   btnStop,
   btnSet,
});

const timer = Timer({
   minutesDisplay,
   secondsDisplay,
   resetControls: controls.reset,
});

btnPlay.addEventListener("click", () => {
   controls.play();
   timer.countdown();
});

btnPause.addEventListener("click", () => {
   controls.pause();
   timer.pause();
});

btnStop.addEventListener("click", () => {
   controls.reset();
   timer.reset();
});

btnSoundOff.addEventListener("click", () => {
   btnSoundOn.classList.remove("hidden");
   btnSoundOff.classList.add("hidden");
});

btnSoundOn.addEventListener("click", () => {
   btnSoundOn.classList.add("hidden");
   btnSoundOff.classList.remove("hidden");
});

btnSet.addEventListener("click", () => {
   let newMinutes = controls.getMinutes();

   if (!newMinutes) {
      return;
   }

   timer.updateDisplay(newMinutes, 0);
   timer.updateMinutes(newMinutes);
});
