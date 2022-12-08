//Estrategia para el paquete 1
//Calcula la información de LocalStrategy más el paquete 1
function StrategyPaquete1(paquete){

    this.paquete = paquete;

    //Método con paquete
    this.operacion = function(destino,transporte){
        return (destino * 1) + (transporte) + (paquete);
    }
    
}

module.exports = StrategyPaquete1;