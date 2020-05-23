//Events "When Clicked"
onEvent("captureButton1", "click", function( ) {
    open("https://https://www.youtube.com/channel/UC8xSip1UdB7iVC7xt11Vmaw");
});
onEvent("YouTubeButton1", "click", function( ) {
    open("https://https://www.youtube.com/channel/UC8xSip1UdB7iVC7xt11Vmaw");
});
  setScreen("homeScreen");
onEvent("discordButton1", "click", function( ) {
  open("https://discord.gg/dGUKT6J");
});
onEvent("to-Intro-ScreenButton", "click", function( ) {
  setScreen("introScreen");
});
onEvent("sciencefactScreenButton", "click", function( ) {
  setScreen("factScreen");
});
onEvent("backButton1", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("backButton2", "click", function( ) {
  setScreen("introScreen");
});
onEvent("creditsScreenButton", "click", function( ) {
  setScreen("credits");
});
onEvent("backButtonToInfo","click", function( ) {
  setScreen("introScreen");
});
onEvent("discordButton2", "click", function( ) {
  open("https://discord.gg/dGUKT6J");
});

//fotd genarator
var fact = randomNumber(1, 10);

//fotd label editing
if (fact ===2) {
  setText("fact1", "Did you know that you can find Pottassium in bananas?");
} else {
  if (fact === 1) {
   setText("fact1", "Did you know that you have billions of cells in your body?");
  } else {
   setText("fact1", "Sadly, Lyam cannot be bothered to add more than two facts. Check back later.");
  }
}





