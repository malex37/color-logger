var colors = require('colors');

logger = function (message,app,priority){

			date = new Date().toString();
			_date = date.substring(0,24);
			_message ='['+app+'] ['+_date+']=> '+message;

			switch(priority){
				case 0:
					//system information
					return console.log(_message.magenta);
					
				case 1:
					//program logging
					return console.log(_message.green);
					
				case 2:
					//variable printing
					return console.log(_message.cyan);
					
				case 3:
					//Error logging
					return console.log(_message.red);
				case 4:
					//module printing
					return console.log(_message.yellow);
				
			}
	}

module.exports = logger;