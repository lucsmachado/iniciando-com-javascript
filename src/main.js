function question10(a) {
  const code = document.getElementById("q10-code");
  const answer = document.getElementById("q10-answer");

  const numberA = Number(a);

  const isOdd = (value) => {
    return value % 2 !== 0;
  };

  const output = (value) => {
    return isOdd(value) ? "É um número ímpar" : "Não é um número ímpar";
  };

  code.innerText = `const a = ${numberA};`;
  answer.innerText = output(numberA);
}

function question9(a) {
  const code = document.getElementById("q9-code");
  const answer = document.getElementById("q9-answer");

  const numberA = Number(a);

  const isEven = (value) => {
    return value % 2 === 0;
  };

  const output = (value) => {
    return isEven(value) ? "É um número par" : "Não é um número par";
  };

  code.innerText = `const a = ${numberA};`;
  answer.innerText = output(numberA);
}

function question8(a, b) {
  const code = document.getElementById("q8-code");
  const answer = document.getElementById("q8-answer");

  const numberA = Number(a);
  const numberB = Number(b);

  code.innerText = `const a = ${numberA};\nconst b = ${numberB};`;
  answer.innerText = `${numberA} / ${numberB} = ${numberA / numberB}`;
}

function question7(a, b) {
  const code = document.getElementById("q7-code");
  const answer = document.getElementById("q7-answer");

  const numberA = Number(a);
  const numberB = Number(b);

  code.innerText = `const a = ${numberA};\nconst b = ${numberB};`;
  answer.innerText = `${numberA} * ${numberB} = ${numberA * numberB}`;
}

function question6(a, b) {
  const code = document.getElementById("q6-code");
  const answer = document.getElementById("q6-answer");

  const numberA = Number(a);
  const numberB = Number(b);

  code.innerText = `const a = ${numberA};\nconst b = ${numberB};`;
  answer.innerText = `${numberA} - ${numberB} = ${numberA - numberB}`;
}

function question5(a, b) {
  const code = document.getElementById("q5-code");
  const q5AnswerA = document.getElementById("q5-answer-a");
  const q5AnswerB = document.getElementById("q5-answer-b");

  const isBoolean = (value) => {
    return typeof value === "boolean";
  };

  const output = (value) => {
    return isBoolean(value) ? "É um booleano" : "Não é um booleano";
  };

  code.innerText = `const a = ${isBoolean(a) ? a : `"${a}"`};\nconst b = ${
    isBoolean(b) ? b : `"${b}"`
  };`;
  q5AnswerA.innerText = output(a);
  q5AnswerB.innerText = output(b);
}

function question4(a, b) {
  const code = document.getElementById("q4-code");
  const q4AnswerA = document.getElementById("q4-answer-a");
  const q4AnswerB = document.getElementById("q4-answer-b");

  const isString = (value) => {
    return typeof value === "string";
  };

  const output = (value) => {
    return isString(value) ? "É uma string" : "Não é uma string";
  };

  code.innerText = `const a = ${isString(a) ? `"${a}"` : a};\nconst b = ${
    isString(b) ? `"${b}"` : b
  };`;
  q4AnswerA.innerText = output(a);
  q4AnswerB.innerText = output(b);
}

function question3(a, b) {
  const code = document.getElementById("q3-code");
  const q3AnswerA = document.getElementById("q3-answer-a");
  const q3AnswerB = document.getElementById("q3-answer-b");

  const isNumber = (value) => {
    return typeof value === "number";
  };

  const output = (value) => {
    return isNumber(value) ? "É um número" : "Não é um número";
  };

  code.innerText = `const a = ${isNumber(a) ? a : `"${a}"`};\nconst b = ${
    isNumber(b) ? b : `"${b}"`
  };`;
  q3AnswerA.innerText = output(a);
  q3AnswerB.innerText = output(b);
}

function question2(a, b) {
  const code = document.getElementById("q2-code");
  const answer = document.getElementById("q2-answer");

  const numberA = Number(a);
  const numberB = Number(b);

  code.innerText = `const a = ${numberA};\nconst b = ${numberB};`;
  answer.innerText = `${numberA} + ${numberB} = ${numberA + numberB}`;
}

function question1() {
  const q1AnswerBtn = document.getElementById("q1-answer");

  q1AnswerBtn.addEventListener("click", () => window.alert("Hello world"));
}

function main() {
  question1();
  question2(2, 3);
  question3(42, "42");
  question4(42, "42");
  question5(true, "true");
  question6(8, 5);
  question7(6, 7);
  question8(10, 2);
  question9(13);
  question10(2);
}

main();
