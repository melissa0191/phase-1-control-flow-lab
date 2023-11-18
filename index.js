function scuberGreetingForFeet(greeting){
  if (greeting <= 400) {
    return 'This one is on me!';

  } else if (greeting >= 400 && greeting <= 2000) {
    return 'That will be twenty bucks.';

  } else if (greeting >= 2000 && greeting <= 2500) {
    return 'I will gladly take your thirty bucks.';

  } else (greeting > 2500) 
    return 'No can do.';
}

function ternaryCheckCity(city){

  let result = city === "NYC" ? "Ok, sounds good." : "No go."
  
  return result
}

function switchOnCharmFromTip(tipAmount) {
  switch (tipAmount) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }

}