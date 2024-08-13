document.addEventListener("DOMContentLoaded", function() {
    const textArea = document.getElementById("textArea");
    const resposta = document.getElementById("resposta");
    const sectionDireita = document.getElementById("sectionDireita");
    const botaoCopiar = document.getElementById("botaoCopiar");
    const mensagens = document.querySelectorAll(".mensagem, .mensagem-destaque");

    function botaoCriptografar() {
        if (textArea && resposta) {
            const textoEncriptado = criptografar(textArea.value);
            console.log("textoEncriptado:", textoEncriptado);
            resposta.value = textoEncriptado;
            textArea.value = "";

            // Ocultar imagem de fundo e parágrafos
            sectionDireita.style.backgroundImage = "none";
            mensagens.forEach(mensagem => mensagem.style.display = "none");

            // Exibir botão de copiar
            botaoCopiar.style.display = "block";
        } else {
            console.error('Elementos não encontrados');
        }
        resposta.style.display = "block";
    }

    function criptografar(stringEncriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for (let i = 0; i < matrizCodigo.length; i++) {
            if (stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }

        return stringEncriptada;
    }

    function botaoDescriptografar() {
        if (textArea && resposta) {
            const textoDesencriptado = descriptografar(textArea.value);
            console.log("textoDesencriptado:", textoDesencriptado);
            resposta.value = textoDesencriptado;
            textArea.value = "";

            sectionDireita.style.backgroundImage = "none";
            mensagens.forEach(mensagem => mensagem.style.display = "none");

            botaoCopiar.style.display = "block";
        } else {
            console.error('Elementos não encontrados');
        }
        resposta.style.display = "block";
    }

    function descriptografar(stringDesencriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for (let i = 0; i < matrizCodigo.length; i++) {
            if (stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }

        return stringDesencriptada;
    }

    document.getElementById('botaoCopiar').addEventListener('click', function() {

        resposta.select();
        resposta.setSelectionRange(0, 99999);

        document.execCommand('copy');

        let textoOriginal = this.textContent;
        this.textContent = "Texto Copiado!";
        setTimeout(() => {
            this.textContent = textoOriginal;
    }, 1500);

    });

    function trocaTema() {
        document.body.classList.toggle('dark-mode');
      }
      
      document.getElementById('toggle-theme').addEventListener('click', trocaTema);
      

    window.botaoCriptografar = botaoCriptografar;
    window.botaoDescriptografar = botaoDescriptografar;
});
