var express = require('express');
var router = express.Router();

const TransporteContext = require("../StrategyPattern/transporteContext");
const LocalStrategy = require("../StrategyPattern/localStrategy");
const StrategyPaquete1 = require("../StrategyPattern/localStrategyPaquete1");
const StrategyPaquete2 = require('../StrategyPattern/localStrategyPaquete2');
const StrategyPaquete3 = require('../StrategyPattern/localStrategyPattern3');

//Precio transporte
const transporte = 350;

//Precio paquetes

const paquete = 150;

const paquete2 = 350;

const paquete3 = 550;

//Métodos 

router.get('/local',function(req,res,next){
    const calculo = new TransporteContext( new LocalStrategy(),transporte);
    const destino = req.query.destino;
    const total = calculo.operacion(destino);

    res.json(total);
})

router.get('/localPaquete',function(req,res,next){
    const calculo = new TransporteContext( new StrategyPaquete1(paquete),transporte);
    const destino = req.query.destino;
    const total = calculo.operacion(destino);

    res.json(total);
})

router.get('/localPaquete2',function(req,res,next){
    const calculo = new TransporteContext( new StrategyPaquete2(paquete2),transporte);
    const destino = req.query.destino;
    const total = calculo.operacion(destino);

    res.json(total);
})

router.get('/localPaquete3',function(req,res,next){
    const calculo = new TransporteContext( new StrategyPaquete3(paquete3),transporte);
    const destino = req.query.destino;
    const total = calculo.operacion(destino);

    res.json(total);
})

module.exports = router;