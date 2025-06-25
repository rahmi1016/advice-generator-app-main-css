const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

let apiAdvices;

function newAdvice() {
  const content = apiAdvices.slip;
  adviceId.textContent = "ADVICE #" + content.id;
  adviceText.textContent = '"' + content.advice + '"';
}

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    apiAdvices = await response.json();
    newAdvice();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getAdvice();

const shuffle = document.getElementById("shuffle");
shuffle.addEventListener("click", getAdvice);
