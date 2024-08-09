function calcular(){
    let N1 = 0 ;
    let N2 = 0 ;
    let N3 = 0 ;

    N1 = Number(document.getElementById("N1").value);
    N2 = Number(document.getElementById("N2").value);
    N3 = Number(document.getElementById("N3").value);
    if (N1 < 0 || N2 < 0 || N3 < 0){
        alert("Ninguna nota puede ser menor a 0");
    }else{
    
        let total = N1 + N2 + N3 + 0;

        let promedio = total / 3;

    let respuesta = document.getElementById("Resp");

    respuesta.textContent = "Promedio: " + promedio;
    }
    

    
}

function limpiar(){
    let N1 = document.getElementById("N1") ;
    let N2 = document.getElementById("N2") ;
    let N3 = document.getElementById("N3") ;
    let respuesta = document.getElementById("Resp");

    respuesta.textContent = "Promedio: " + 0;
    N1.value = 0 ;
    N2.value = 0 ;
    N3.value = 0 ;
}