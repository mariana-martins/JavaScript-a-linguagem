function percorreArray(nossosTrs, comportamento){
    for(var posicaoDoTrAtual = 0; posicaoDoTrAtual <= nossosTrs.length -1; posicaoDoTrAtual ++) {
        var trAtual = nossosTrs[posicaoDoTrAtual];
        
        comportamento(trAtual);
    }
}