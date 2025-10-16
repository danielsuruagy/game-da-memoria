const emojis = [
  "🐱", "🐱", "🦝", "🦝", "🦊", "🦊", "🐶", "🐶",
  "🐵", "🐵", "🦁", "🦁", "🐯", "🐯", "🐮", "🐮"
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item"; // Apenas a classe 'item' - cartas começam viradas
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  // Impede clicar na mesma carta duas vezes ou em cartas já combinadas
  if (this.classList.contains("boxOpen") || this.classList.contains("boxMatch") || openCards.length >= 2) {
    return;
  }
  
  this.classList.add("boxOpen");
  openCards.push(this);

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    setTimeout(() => {
      alert("Você venceu!");
    }, 500);
  }
}