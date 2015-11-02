function montaPaciente (trAtual){
    var nomeTd = trAtual.getElementsByClassName("info-nome")[0];
    var pesoTd = trAtual.getElementsByClassName("info-peso")[0];
    var alturaTd = trAtual.getElementsByClassName("info-altura")[0];
    var imcTd = trAtual.getElementsByClassName("info-imc")[0];
    
    
    var paciente = {
        nome: nomeTd.textContent, 
        peso: pesoTd.textContent, 
        altura: alturaTd.textContent, 
        pegaImc: function(){
            if(this.altura != 0) {
                var imcDoPaciente = this.peso / (this.altura * this.altura); 
                return imcDoPaciente;
            } else {
                console("Não posso dividr por zero!");
            }
        }
    };
    
    return paciente;
}