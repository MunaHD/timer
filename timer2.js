const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('\nPlease enter a number between 1 & 9 to set a timer \nor press b to make it beep now: ', (answer) => {
  //if number if less than 1 or greater than 9 then print message and exit
  if (answer < 1 || answer > 9){
    rl.write("Try again with a number next time, ciao! \n")
    process.exit();
  }

  // The user can press b and it should beep right away
  if (answer === 'b'){
    process.stdout.write ('\x07')
    process.exit();
  }

  // The user can input any number from 1 to 9 and it should
  // immediately output "setting timer for x seconds...", 
  if (answer => 1 && answer <= 9){
    console.log(`setting timer for ${answer} seconds...`);
    // beep after that number of seconds has passed
    setTimeout(() => {
      process.stdout.write ('\x07')
    }, answer * 1000);
  } 

  //if the user enters ctrl + C it exits the program
  //PROBLEM ========> exits without printing message
  if (answer === '\u0003') {
    rl.write("Thanks for using me, ciao!")
    process.exit();
    
  } 
  



  rl.close();
});
