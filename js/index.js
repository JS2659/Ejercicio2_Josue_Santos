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