// Habilitar animação.
const items = document.querySelectorAll("[data-anime]"); //transforma em um array.

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight;
  items.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

window.addEventListener("scroll", () => {
  animeScroll();
});

// validação do form.

const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const labelNome = document.querySelector("#labelNome");
const labelEmail = document.querySelector("#labelEmail");
const buttonEnviar = document.querySelector("#buttonEnviar");
let camposOk = false;

inputNome.addEventListener("keyup", () => {
  if (inputNome.value.length < 3) {
    labelNome.innerText = "Nome (Digite um nome válido)";
    labelNome.style.color = "red";
    camposOk = false;
  } else {
    labelNome.innerText = "Nome";
    labelNome.style.color = "rgb(132, 160, 236)";
    camposOk = true;
  }
  validaButton();
});

inputEmail.addEventListener("keyup", () => {
  if (inputEmail.value.length == 0) {
    labelEmail.innerText = "E-mail (Digite um e-mail válido)";
    labelEmail.style.color = "red";
    camposOk = false;
  } else {
    labelEmail.innerText = "E-mail";
    labelEmail.style.color = "rgb(132, 160, 236)";
    camposOk = true;
  }
  validaButton();
});

const validaButton = () => {
  if (camposOk == false) {
    buttonEnviar.setAttribute("disabled", "disabled");
    buttonEnviar.classList.add("buttonDisable");
  } else {
    buttonEnviar.removeAttribute("disabled", "disabled");
    buttonEnviar.classList.remove("buttonDisable");
  }
};

validaButton();

buttonEnviar.addEventListener("click", () => {
  alert("Formulário enviado com sucesso!");
});
