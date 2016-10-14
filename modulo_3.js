//var onoff = require('onoff');

//var Gpio = onoff.Gpio,

//Pino_4= new Gpio(4, 'out'),
	 
module.exports = function SetPino_4_ON(value1) {
	
	Pino_4.writeSync(1);

	var value1= Pino_4.readSync();
	


		if (value1==1) {
			return true //pino 4 ligado -- passa o teste
		}
};

		
