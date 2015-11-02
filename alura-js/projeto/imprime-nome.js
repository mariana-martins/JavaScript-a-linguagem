var nossosTrs = document.getElementsByClassName("paciente");

percorreArray(nossosTrs, function (trAtual) {
    var pacienteAtual = montaPaciente(trAtual);
    console.log(pacienteAtual.nome);
});





