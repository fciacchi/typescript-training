import { returnGreeting } from './exercise32-module-export1';
import * as allGreetingFunctions from './exercise32-module-export1';
import { returnGreeting as returnGreetingLength } from './exercise33-module-export2';

// Displays 'The message from Greetings_module is Hola!'
returnGreeting('Hola!');
// Displays 'The message from Greetings_module is Bonjour!'
allGreetingFunctions.returnGreeting('Bonjour');
// Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
returnGreetingLength('Ciao!');
