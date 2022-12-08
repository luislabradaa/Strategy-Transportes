function TransporteContext(strategy,transporte){
    this.strategy = strategy;
    this.transporte = transporte;

    this.setStrategy = function(strategy){
        this.strategy = strategy;
    }

    this.operacion = function(destino){
        return this.strategy.operacion(destino,this.transporte);
    }
}

module.exports = TransporteContext;