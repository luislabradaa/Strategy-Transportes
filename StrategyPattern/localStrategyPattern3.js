//Estrategia para el paquete 3
//Calcula la información de LocalStrategy más el paquete 3
function StrategyPaquete3(paquete3){
    this.paquete3 = paquete3;

    //Método con paquete3
    this.operacion = function(destino,transporte){
        return (destino * 1) + (transporte) + (paquete3);
    }
}

module.exports = StrategyPaquete3;