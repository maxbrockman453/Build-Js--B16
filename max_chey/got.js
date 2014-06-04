/*
Click on sigil
get prompted to input what the house name is
if the housename is correct prompt what the motto is
if that is correct then prompt well done, you may pass
if not correct prompt you are a traitor.
*/



GOT = function () {
document.getElementById("greyjoy").onclick = function sigilchoice() {
  var name = prompt("what is our house name");
  if(name === "greyjoy"){
    var motto = prompt("Verywell! What is our House Motto?");
      if (motto === "ironborn"){
      alert("verywell you shall pass brother");
      }
      else {
      alert("a traitor and no true Ironborn! Die");
  }
    }
  else {
    alert("a traitor and no true Ironborn! Die");
  }

  };
};


GOT();
