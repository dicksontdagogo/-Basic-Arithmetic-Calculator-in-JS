var firstnumber, secondnumber, answer, opr;
firstnumber = parseInt(prompt("Enter the First number"));
secondnumber = parseInt(prompt("Enter the Second number"));
opr = prompt("Choose the Operator: +, -, /, x");

if (opr == "+") {
  answer = Number(firstnumber) + Number(secondnumber);
} else if (opr == "-") {
  answer = Number(firstnumber) - Number(secondnumber);
} else if (opr == "/") {
  answer = Number(firstnumber) / Number(secondnumber);
} else if (opr == "x") {
  answer = Number(firstnumber) * Number(secondnumber);
}

alert(answer);