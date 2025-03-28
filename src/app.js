import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who=["My grandma","My dog","My mailman","My bird"];
  let action=[" ate "," crushed "," broke "," destroyed"];
  let what=[" my car "," my homework"," my phone"];
  let when=[" before class started."," while i was sleeping."," during lunchtime."];

  let selectedWho = Math.floor(Math.random() * who.length)
  let selectedAction = Math.floor(Math.random() * action.length)
  let selectedWhat = Math.floor(Math.random() * what.length)
  let selectedWhen = Math.floor(Math.random() * when.length)

  let statement = who[selectedWho] + action[selectedAction] + what[selectedWhat] + when[selectedWhen];
  
  let htmlStatement = document.querySelector('.excuse');
  htmlStatement.innerHTML = statement;
  
  
};
