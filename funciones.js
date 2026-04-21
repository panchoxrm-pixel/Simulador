function calcularDisponible(ingresos, egresos) {
    let valorDisponible = ingresos - egresos;
    return valorDisponible < 0 ? 0 : valorDisponible;
}

function calcularCapacidadPago(montoDisponible) {
    return montoDisponible / 2;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    return monto * (tasa / 100) * plazoAnios;
}

function calcularTotalPagar(monto, interes) {
    let impuestoSolca = 100;
    return monto + interes + impuestoSolca;
}

function calcularCuotaMensual(totalPagar, plazoAnios) {
    return totalPagar / (plazoAnios * 12);
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    return capacidadPago > cuotaMensual;
}