//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    let ingresosFloat=0;
    let egresosFloat=0;
    let cmpIngresosFloat;
    let cmpEgresosFloat;
    let valorDisponibleFloat;

    cmpIngresosFloat=document.getElementById("txtIngresos");
    cmpIngresosFloat=document.getElementById("txtEngresos");
    cmpIngresosFloat=(cmp.ingresos.value);
    cmpEgresosFloat=(cmp.egresos.value);
    valorDisponibleFloat= calcularDisponible(ingresosFloat,egresosFloat);
    total=document.getElementById("spnDisponible");
    total.innerText=valorDisponibleFloat;
}
