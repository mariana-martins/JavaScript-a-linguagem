function calculandoTodosImcs(){
    var nossosTrs = document.getElementsByClassName("paciente");

    percorreArray(nossosTrs, function(trAtual){
        var pacienteAtual = montaPaciente(trAtual);
        var imc = pacienteAtual.pegaImc();
        
        var imcTd = trAtual.getElementsByClassName("info-imc")[0];
        imcTd.textContent = imc;
        console.log(imc);

    });
}

var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click", calculandoTodosImcs);