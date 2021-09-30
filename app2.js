function ConverterTemperaturas(){
    let temperaturaEmCelsius = document.querySelector("#temperaturaEmCelsius").value
    let celsiusCovertido = parseFloat(temperaturaEmCelsius);

    let temperaturaEmKelvin = celsiusCovertido + 273
    let temperaturaEmFahrenheit = 1.8 * celsiusCovertido + 32

    document.querySelector("#resultadoEmKelvin").innerHTML = "Kelvin: "+ temperaturaEmKelvin
    document.querySelector("#resultadoEmFahrenheit").innerHTML = "Fahrenheit: " + temperaturaEmFahrenheit
}