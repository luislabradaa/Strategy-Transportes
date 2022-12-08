//Estrategia principal
//Calcula el precio del transporte más el precio del destino
function LocalStrategy(){
    this.operacion = function(destino,transporte){
        return (destino * 1) + (transporte);
    }
}

module.exports = LocalStrategy;