//Estrategia para el paquete 2
//Calcula la información de LocalStrategy más el paquete 2
function StrategyPaquete2(paquete2){
    this.paquete2 = paquete2;

    //Método con paquete2
    this.operacion = function(destino,transporte){
        return (destino * 1) + (transporte) + (paquete2);
    }
}

module.exports = StrategyPaquete2;