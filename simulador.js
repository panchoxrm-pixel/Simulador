//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    let ingresos;
    let egresos;
    let cmpIngresos;    
    let cmpEgresos;
    let ingresosFloat;
    let egresosFloat;  
    let valorDisponibleFloat;
    let lblDisponibleValor;
    let lblCapacidadValor;
    let monto;
    let cmpMonto;
    let montoEntero;
    let plazoAños;
    let cmpPlazoAños;
    let plazoAñosEntero;
    let tasa;
    let cmpTasa;
    let tasaEntero;
    let lblInteresAPagar;
    let totalPagar;
    let lblTotalValor;
    let lblCuotaValor;
    let mensaje;
    let estadoCredito;

    // ¿Cómo convertir un string (cadena de texto) en un float (número decimal) y cómo guardarlo?
    // 1. Recuperar la id (en html) de la caja de texto de ingresos y asignarle a una variable
    // 2. Extraer de la variable anterior el dato (string) de la caja de texto y guardarlo en otra variable.
    // 3. Convertir en # decimal (float) el string extraído con la función parseFloat 

    cmpIngresos=document.getElementById("txtIngresos");
    ingresos=cmpIngresos.value;
    ingresosFloat=parseFloat(ingresos);

    cmpEgresos=document.getElementById("txtEgresos");
    egresos=cmpEgresos.value;
    egresosFloat=parseFloat(egresos);
    
    valorDisponibleFloat=calcularDisponible(ingresosFloat,egresosFloat);

    lblDisponibleValor=document.getElementById("spnDisponible");
    lblDisponibleValor.innerText=valorDisponibleFloat;

    capacidadPago=calcularCapacidadPago(valorDisponibleFloat);

    lblCapacidadValor=document.getElementById("spnCapacidadPago");
    lblCapacidadValor.innerText=capacidadPago;

    cmpMonto=document.getElementById("txtMonto");
    monto=cmpMonto.value;
    montoEntero=parseInt(monto);

    cmpTasa=document.getElementById("txtTasaInteres");
    tasa=cmpTasa.value;
    tasaEntero=parseInt(tasa);

    cmpPlazoAños=document.getElementById("txtPlazo");
    plazoAños=cmpPlazoAños.value;
    plazoAñosEntero=parseInt(plazoAños);

    interesSimple=calcularInteresSimple(montoEntero,tasaEntero,plazoAñosEntero);

    lblInteresAPagar=document.getElementById("spnInteresPagar");
    lblInteresAPagar.innerText=interesSimple.toFixed(2);

    totalPagar=calcularTotalPagar(montoEntero,interesSimple);

    lblTotalValor=document.getElementById("spnTotalPrestamo");
    lblTotalValor.innerText=totalPagar.toFixed(2);

    cuotaMensual=calcularCuotaMensual(totalPagar,plazoAñosEntero);

    lblCuotaValor=document.getElementById("spnCuotaMensual");
    lblCuotaValor.innerText=cuotaMensual.toFixed(2);
    

    analisisCredito=aprobarCredito(capacidadPago,cuotaMensual);
        
        if(analisisCredito==true){
            estadoCredito="Crédito aprobado"
        } else {
            estadoCredito="Crédito rechazado"
        }
        
        mensaje=document.getElementById("spnEstadoCredito");
        mensaje.innerText=estadoCredito;
}

function reiniciar() {
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";
    document.getElementById("spnDisponible").innerText = "";
    document.getElementById("spnCapacidadPago").innerText = "";
    document.getElementById("spnInteresPagar").innerText = "";
    document.getElementById("spnTotalPrestamo").innerText = "";
    document.getElementById("spnCuotaMensual").innerText = "";
    document.getElementById("spnEstadoCredito").innerText = "";
    document.getElementById("spnEstadoCredito").style.color = "black";
}

       
    