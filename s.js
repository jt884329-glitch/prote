let productos =
JSON.parse(localStorage.getItem("productos")) || {};

alert(JSON.stringify(productos));
document
    .getElementById("btnHablar")
    .addEventListener("click", escuchar);

function escuchar() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    const reconocimiento =
        new SpeechRecognition();

    reconocimiento.lang = "es-MX";

    document
        .getElementById("resultado")
        .textContent = "🎤 Escuchando...";

    reconocimiento.start();

    reconocimiento.onresult = function(event) {

        const texto =
            event.results[0][0]
            .transcript
            .toLowerCase()
            .trim();

        console.log("Escuché:", texto);

        let respuesta = "";
        let productoEncontrado = null;

        for(let nombre in productos){

            if(texto.includes(nombre)){

                productoEncontrado = nombre;
                break;
            }
        }

        if(productoEncontrado){

            respuesta =
            `${productoEncontrado} cuesta ${productos[productoEncontrado].precio} pesos`;

        }else{

            respuesta = "Producto no encontrado";

        }

        document
            .getElementById("resultado")
            .textContent = respuesta;

        const voz =
            new SpeechSynthesisUtterance(
                respuesta
            );

        voz.lang = "es-MX";

        speechSynthesis.speak(voz);
    };
}