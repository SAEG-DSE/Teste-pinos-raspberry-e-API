//var onoff = require('onoff');

//var Gpio = onoff.Gpio,

//Pino_7= new Gpio(4, 'out'),
	 
module.exports = function SetPino_4_OFF(value1) {
	
	Pino_4.writeSync(0);

	var value1= Pino_4.readSync();
	


		if (value1==0) {
			return ('Pino com defeito!') //pino 4 ligado -- passa o teste
		}
};

		
