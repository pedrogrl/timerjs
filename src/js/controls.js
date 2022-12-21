function Controls({
   btnPlay,
   btnPause,
   btnSet,
   btnStop,
}) {

   function reset() {
      btnPlay.classList.remove("hidden");
      btnPause.classList.add("hidden");

      btnSet.classList.remove("hidden");
      btnStop.classList.add("hidden");
   }

   function play() {
      btnPlay.classList.add("hidden");
      btnPause.classList.remove("hidden");

      btnSet.classList.add("hidden");
      btnStop.classList.remove("hidden");
   }

   function pause() {
      btnPause.classList.add("hidden");
      btnPlay.classList.remove("hidden");
   }

   function getMinutes() {
      const newMinutes = prompt("Minutes:");
      if (!newMinutes) {
         return false;
      }

      return newMinutes
   }

   return {
      reset,
      play,
      pause,
      getMinutes
   };
}

export default Controls;
