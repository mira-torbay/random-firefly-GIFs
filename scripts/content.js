// choosing a random number
const number = Math.floor(Math.random() * 8);

let gif = "placeholder";
switch(number) {
  case 0:
    gif = "GIFs/jayne-hat.gif";
    break;
  case 1:
    // code block
    break;
  case 2:
    // code block
    break
  case 3:
    // code block
    break
  case 4:
    // code block
    break
  case 5:
    // code block
    break
  case 6:
    // code block
    break
  case 7:
    // code block
    break
  default:
    // code block
}

const badge = document.createElement("p");

// Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `number selected: ${number}, corresponding GIF: ${}`;

  (date ?? heading).insertAdjacentElement("afterend", badge);
