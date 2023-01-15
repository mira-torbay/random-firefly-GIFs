// choosing a random number
const number = Math.floor(Math.random() * 8);

let gif = "placeholder";
switch(number) {
  case 0:
    gif = "GIFs/jayne-hat.gif";
    break;
  case 1:
    gif = "GIFs/mal-misbehave.gif";
    break;
  case 2:
    gif = "GIFs/wash-dinosaurs.gif";
    break
  case 3:
    gif = "GIFs/mal-bonnet.gif";
    break
  case 4:
    gif = "GIFs/mal-turbulence.gif";
    break
  case 5:
    gif = "GIFs/kaylee-umbrella.gif";
    break
  case 6:
    gif = "GIFs/kaylee-inara.gif";
    break
  case 7:
    gif = "GIFs/river-power.gif";
    break
  default:
    gif = "uh we have a problem";
}
