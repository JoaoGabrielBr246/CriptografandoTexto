function crip() {
    let text = document.querySelector("textarea").value;
    
    // Verifica se o texto contém apenas letras minúsculas e sem acentos
    if (!/^[a-z]+$/.test(text)) {
      alert("Por favor, digite apenas letras minúsculas e sem acentos.");
      return;
    }
    
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");

    listaFrase = text.split("").map((letra) => {
      return letra;
    });

    exibirResultado();
}
  
function descrip() {
    let text = document.querySelector("textarea").value;

    // Verifica se o texto contém apenas letras minúsculas e sem acentos
    if (!/^[a-z]+$/.test(text)) {
      alert("Por favor, digite apenas letras minúsculas e sem acentos.");
      return;
    }

    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");

    listaFrase = text.split("").map((letra) => {
      return letra;
    });

    exibirResultado();
}
  
  function exibirResultado() {
    let image = document.querySelector(".rectangle__img");
    let h1 = document.querySelector(".rectangle__h1");
    let p = document.querySelector(".rectangle__p");
    let rectangle = document.querySelector(".rectangle");
  
    if (listaFrase.length === 0) {
      image.src = "assets/nomessage.svg";
      h1.textContent = "Nenhuma mensagem encontrada";
      p.textContent = "Digite um texto que você deseja criptografar ou descriptografar";
    } else {
      image.src = ""; 
      p.textContent = listaFrase.join(""); 
      h1.textContent = "";

      document.getElementById('copy-btn').removeAttribute('hidden');

    }
  }

  function copyText() {
    let textToCopy = document.querySelector(".rectangle__p").textContent;
  
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          alert("Texto copiado para a área de transferência!");
        })
        .catch((err) => {
          console.error("Erro ao copiar texto: ", err);
        });
    }
  }