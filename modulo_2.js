//var onoff = require('onoff');

//var Gpio = onoff.Gpio,

//Pino_4= new Gpio(4, 'out'),
	 
module.exports = function SetPino_4_ou_7_ON(value1,value2) {
	
	Pino_4.writeSync(1);
	Pino_7.writeSync(1);

	var value1= Pino_4.readSync();
	var value2= Pino_7.readSync();


		if (value1==1) || (value2==1) {
			return ('Pelo menos um pino esta ok!') // pelo menos 1 pino ligado -- passa o teste
		}
};

		
