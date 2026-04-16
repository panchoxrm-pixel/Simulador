
function calcularDisponible(ingresos,egresos){
    let valorDisponible=0;
    valorDisponible=ingresos-egresos;
    if(valorDisponible<0){
        return "0";
    }
    return valorDisponible;
    }

function calcularCapacidadPago(montoDisponible){
    let capacidadPago;
    capacidadPago=montoDisponible/2;
    return capacidadPago;
}