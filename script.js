const text = document.querySelector("span");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Hello!";
  }, 0);
  setTimeout(() => {
    text.textContent = "Hola!";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Ciao!";
  }, 8000);
  // pretty sure this line of code fixes the reloading problem
  setTimeout(() => {
    // this one looks a little strange and is for some reason bigger than other texts
    text.textContent = "안녕";
    // span.style.fontsize = "5em";
  }, 12000);
  setTimeout(() => {
    // text.textContent = "Hello!";
    text.textContent = textLoad();
  }, 16000);
}

// originally loads the text
textLoad();