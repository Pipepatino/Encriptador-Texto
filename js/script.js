//Variables del HTML
const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById('botonEncriptar');
const botonDesencriptar = document.getElementById('botonDesencriptar');
const botonCopiar = document.getElementById('botonCopiar');
const mensajeFinal = document.getElementById('mensajeFinal');
const muneco = document.getElementById("muneco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");

let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

const remplace = (nuevoValor) => {

    mensajeFinal.innerHTML = nuevoValor;
    
    muneco.style.display = "none";

    muneco.classList.add("oculto");
    
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
    ingresoTexto.value = "";

}

botonEncriptar.addEventListener("click", () =>{
    const texto = ingresoTexto.value.toLowerCase()
    function encriptar(newText){
        for(let i = 0; i < remplazar.length; i++){
            if(newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
            };
        };
        return newText;
    }

    remplace(encriptar(texto))
})

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()

    function desencriptar(newText){
        for(let i = 0; i < remplazar.length; i++){
            if(newText.includes(remplazar[i][1])){
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
            };
        };
        return newText;
    }

    remplace(desencriptar(texto))

})

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    navigator.clipboard.writeText(texto.value);
    alert("Texto copiado!");

    mensajeFinal.innerHTML = "";
    muneco.style.display = "block";
    rightInfo.style.display = "block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
    muneco.classList.remove("oculto");
})