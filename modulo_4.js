//var onoff = require('onoff');

//var Gpio = onoff.Gpio,

//Pino_7= new Gpio(4, 'out'),
	 
module.exports = function SetPino_7_ON(value2) {
	
	Pino_7.writeSync(1);

	var value2= Pino_7.readSync();
	


		if (value2==1) {
			return true //pino 4 ligado -- passa o teste
		}
};

		
