import Timer from "./timer.js";
import Controls from "./controls.js";
import Sounds from "./sounds.js";
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

const sound = Sounds() 

btnPlay.addEventListener("click", () => {
   controls.play();
   timer.countdown();
   sound.buttonPress.play();
});

btnPause.addEventListener("click", () => {
   controls.pause();
   timer.pause();
   sound.buttonPress.play();
});

btnStop.addEventListener("click", () => {
   controls.reset();
   timer.reset();
   sound.buttonPress.play();
});

btnSoundOff.addEventListener("click", () => {
   btnSoundOn.classList.remove("hidden");
   btnSoundOff.classList.add("hidden");
   sound.bgAudio.play()
});

btnSoundOn.addEventListener("click", () => {
   btnSoundOn.classList.add("hidden");
   btnSoundOff.classList.remove("hidden");
   sound.bgAudio.pause()
});

btnSet.addEventListener("click", () => {
   sound.buttonPress.play()
   let newMinutes = controls.getMinutes();

   if (!newMinutes) {
      return;
   }

   timer.updateDisplay(newMinutes, 0);
   timer.updateMinutes(newMinutes);
});
