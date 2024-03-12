function changeMode(size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}
function main() {
  const spooky = changeMode(9, "bold", " uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", " lowercase", "white", "black");

  // paragraph on the body

  const par = document.body.appendChild(document.createElement("p"));
  par.innerHTML = "Welcome Hoberton";
  
  // Button Click Event Listener
  const btnSpooky = document.body.appendChild(document.createElement("button"));
  btnSpooky.innerHTML = "Spooky";
  btnSpooky.addEventListener("click", () => {
    spooky();
  });

  const btnDark = document.body.appendChild(document.createElement("button"));
  btnDark.innerHTML = "Dark Mode";
  btnDark.addEventListener("click", () => {
    darkMode();
  });
  const btnScream = document.body.appendChild(document.createElement("button"));
  btnScream.innerHTML = "Scream Mode";
  btnScream.addEventListener("click", () => {
    screamMode();
  });
}
main();
