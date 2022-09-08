function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorCad = "3.99";

    var valorDoCad = parseFloat(valorCad);
    var valorEmReal = parseFloat(valor);
    var valorEmCad = valorEmReal / valorDoCad;
    var valorFixado = valorEmCad.toFixed(2)

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var quandoTenhoEmCad = "O valor adicionado corresponde a CAD " + valorFixado + " dólar(es) canadense(s)";
    elementoValorConvertido.innerHTML = quandoTenhoEmCad;
}
