function randomGIF() {
  const number = Math.floor(Math.random() * 8);
  let text = "placeholder";
  var gif;
   switch(number) {
      case 0:
        text = "Jayne hat";
        gif = "GIFs/jayne-hat.gif";
        break;
      case 1:
        text = "Mal 'aim to misbehave'";  
        gif = "GIFs/mal-misbehave.gif";
        break;
      case 2:
        text = "Wash dinosaurs";  
        gif = "GIFs/wash-dinosaurs.gif";
        break
      case 3:
        text = "Mal bonnet";  
        gif = "GIFs/mal-bonnet.gif";
        break
      case 4:
        text = "Mal turbulence quote";
        gif = "GIFs/mal-turbulence.gif";
        break
      case 5:
        text = "Kaylee umbrella";
        gif = "GIFs/kaylee-umbrella.gif";
        break
      case 6:
        text = "Kaylee and Inara";
        gif = "GIFs/kaylee-inara.gif";
        break
      case 7:
        text = "River 'no power in the verse'"
        gif = "GIFs/river-power.gif";
        break
      default:
        text = "uh we have a problem";
        gif = "GIFs/error.gif";
    }
    document.getElementById('myGIF').src = gif;
  }

const button = document.querySelector("button");
button.addEventListener("click", async () => {
  randomGIF();
});