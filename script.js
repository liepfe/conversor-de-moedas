function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmDolar = valorEmReal / 5.06;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Este valor equivale a U$ " + valorEmDolar.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmEuro = valorEmReal / 5.51;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "Este valor equivale a  " + valorEmEuro.toFixed(2) + "€";
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterIene() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmIene = valorEmReal * 22.86;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "Este valor equivale a  " + valorEmIene.toFixed(2) + "¥";
  elementoValorConvertido.innerHTML = valorConvertido;
}