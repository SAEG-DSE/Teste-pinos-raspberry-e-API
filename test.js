var should = require( 'should' );
var value1= require ('../modulo_1.js');
var value2= require ('../modulo_1.js');
//functions
SetPino_4_e_7_ON = require ('../modulo_1.js');
SetPino_4_ou_7_ON = require ('../modulo_2js');
SetPino_4_ON = require ('../modulo_3.js');
SetPino_7_ON = require ('../modulo_4.js');
SetPino_4_OFF = require ('../modulo_5.js');

var onoff = require('onoff');
var Gpio = onoff.Gpio;
Pino_4 = new Gpio(4, 'out');
Pino_7= new Gpio(7, 'out');

describe('modulo_1', function() {

        it( 'Testa se o pino 4 e 7 estao em nivel logico 1)', function() {
                SetPino_4_e_7_ON(value1,value2).should.be.true();

        });
});

describe('modulo_2', function() {

        it( 'Testa se o pino 4  ou 7 estao em nivel logico 1)', function() {
                SetPino_4_ou_7_ON(value1,value2).should.be.equal('Pelo menos um pino esta ok!');

        });
});

describe('modulo_3', function() {

        it( 'Testa se o pino 4 esta em nivel logico 1)', function() {
                SetPino_4_ON(value1).should.be.true();

        });
});

describe('modulo_4', function() {

        it( 'Testa se o pino 7 esta em nivel logico 1)', function() {
                SetPino_4_ON(value2).should.be.true();

        });
});


describe('modulo_5', function() {

        it( 'Testa se o pino 4 esta em nivel logico 0)', function() {

        SetPino_4_OFF(value1).should.be.equal('Pino com defeito!');

        });
});