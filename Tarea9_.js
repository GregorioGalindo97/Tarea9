let Nombres = localStorage.getItem("name");
    
    if (Nombres) {
      let greetingContainer = document.getElementById("titulo");
      greetingContainer.innerHTML = `
        <h1>Bienvenido nuevamente, ${Nombres}!</h1>`;
    } else {
      let submitButton = document.getElementById("boton");
      submitButton.addEventListener("click", () => {
        let nameInput = document.getElementById("entrada");
        let Nombres = nameInput.value;
    
        localStorage.setItem("name", Nombres);
    
        let greetingContainer = document.getElementById("titulo");
        greetingContainer.innerHTML = `<h1>Bienvenido nuevamente, ${Nombres}!</h1>`;
      });
    }
    
    let clearStorageButton = document.getElementById("clear-storage-button");
    clearStorageButton.addEventListener("click", () => {
      localStorage.removeItem("name");
    
      location.reload();
    });