export default function Sounds() {

   const buttonPress = new Audio('/src/audio/button-press.wav')
   const kitchenTimer = new Audio('/src/audio/kichen-timer.mp3')
   const bgAudio = new Audio('/src/audio/bg-audio.mp3')

   buttonPress.volume = 0.05, 
   kitchenTimer.volume = 0.1, 
   bgAudio.volume = 0.1,

   bgAudio.loop = true

   
   return {
      buttonPress,
      kitchenTimer,
      bgAudio
   }
}
