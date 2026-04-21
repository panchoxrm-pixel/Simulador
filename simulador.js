function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
    
    let arriendo = parseFloat(document.getElementById("txtArriendo").value) || 0;
    let alimentacion = parseFloat(document.getElementById("txtAlimentacion").value) || 0;
    let varios = parseFloat(document.getElementById("txtVarios").value) || 0;

    let totalEgresos = arriendo + alimentacion + varios;
    
    document.getElementById("spnEgresos").innerText = totalEgresos.toFixed(2);

    let valorDisponibleFloat = calcularDisponible(ingresos, totalEgresos);
    document.getElementById("spnDisponible").innerText = valorDisponibleFloat.toFixed(2);

    let capacidadPago = calcularCapacidadPago(valorDisponibleFloat);
    document.getElementById("spnCapacidadPago").innerText = capacidadPago.toFixed(2);

    let monto = parseFloat(document.getElementById("txtMonto").value) || 0;
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value) || 0;
    let plazoAnios = parseInt(document.getElementById("txtPlazo").value) || 0;

    let interesSimple = calcularInteresSimple(monto, tasa, plazoAnios);
    document.getElementById("spnInteresPagar").innerText = interesSimple.toFixed(2);

    let totalPagar = calcularTotalPagar(monto, interesSimple);
    document.getElementById("spnTotalPrestamo").innerText = totalPagar.toFixed(2);

    let cuotaMensual = calcularCuotaMensual(totalPagar, plazoAnios);
    document.getElementById("spnCuotaMensual").innerText = cuotaMensual.toFixed(2);

    let analisisCredito = aprobarCredito(capacidadPago, cuotaMensual);
    
    let mensajeElemento = document.getElementById("spnEstadoCredito");
    if (analisisCredito) {
        mensajeElemento.innerText = "Crédito aprobado";
        mensajeElemento.style.color = "green";
    } else {
        mensajeElemento.innerText = "Crédito rechazado";
        mensajeElemento.style.color = "red";
    }
}

function reiniciar() {
    const ids = ["txtIngresos", "txtArriendo", "txtAlimentacion", "txtVarios", "txtMonto", "txtPlazo", "txtTasaInteres"];
    ids.forEach(id => document.getElementById(id).value = "");

    const spans = ["spnEgresos", "spnDisponible", "spnCapacidadPago", "spnInteresPagar", "spnTotalPrestamo", "spnCuotaMensual", "spnEstadoCredito"];
    spans.forEach(id => document.getElementById(id).innerText = "—");
    document.getElementById("spnEstadoCredito").style.color = "black";
}