const paragraph = document.getElementById("nomeSalvato");
const yourName = document.getElementById("nome");
const save = document.getElementById("save");
const remove = document.getElementById("remove");

document.addEventListener("DOMContentLoaded", () => {
  save.addEventListener("click", (event) => {
    event.preventDefault();

    localStorage.setItem("nome", yourName.value);
    paragraph.innerText = yourName.value;
  });

  remove.addEventListener("click", (event) => {
    event.preventDefault();

    localStorage.removeItem("nome");
    yourName.value = "";
    paragraph.innerText = "";
  });
  setInterval(counting, 1000);
});

const counting = () => {
  let num = sessionStorage.getItem("counter");
  if (!num) {
    num = 0;
  }
  num++;
  sessionStorage.setItem("counter", num);
  document.getElementById("numbers").innerText = num;
};

window.onload = () => {
  let savedName = localStorage.getItem("nome");
  if (savedName) {
    paragraph.innerText = yourName.value;
  }
};
