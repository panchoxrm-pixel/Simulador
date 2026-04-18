
function calcularDisponible(ingresos,egresos){
    let valorDisponible;
    valorDisponible=ingresos-egresos;
    if(valorDisponible<0){
        return 0;
    } return valorDisponible;
}

function calcularCapacidadPago(montoDisponible){
    let capacidadPago;
    capacidadPago=montoDisponible/2;
    return capacidadPago;
}

function calcularInteresSimple(monto,tasa,plazoAños){
    let interesSimple;
    interesSimple=monto*(tasa/100)*plazoAños;
    return interesSimple;
}

function calcularTotalPagar(monto,interes){
    let totalPagar;
    let impuestoSolca=100;
    totalPagar=monto+interes+impuestoSolca;
    return totalPagar;
}

function calcularCuotaMensual(totalPagar,plazoAños){
    let cuotaMensual;
    cuotaMensual=totalPagar/(plazoAños*12);
    return cuotaMensual;
}

function aprobarCredito(capacidadPago,cuotaMensual){
    if(capacidadPago>cuotaMensual){
       return true;
    } else {
        return false
    }
}