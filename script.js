function getInfo(type) {
  switch (type) {
    case "history":
      return document.getElementById("history").innerText;
    case "result":
      return document.getElementById("result").innerText;

    default:
      break;
  }
}

function refreshInfo(type, number) {
  switch (type) {
    case "history":
      return (document.getElementById("history").innerText = number);

    case "result":
      if (number == "") {
        return (document.getElementById("result").innerText = "");
      } else {
        return (document.getElementById("result").innerText = number);
      }

    default:
      break;
  }
}

var operator = document.getElementsByName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => onClickOperator(operator[i]));
}

var number = document.getElementsByName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", () => onClickNumber(number[i]));
}

function onClickOperator(operator) {
  const getResult = getInfo("result");
  const getHistory = getInfo("history");
  const isResultShow = false;

  if (operator.id == "clear") {
    refreshInfo("result", "");
    refreshInfo("history", "");
    return;
  }
  else if(operator.id == "backspace"){
    res = getResult.slice(0, -1);
    refreshInfo("result", res);
  }
  else if(operator.id == "%"){
    let res = eval(getResult/100)
    return refreshInfo("result", res)
  }
  else if (operator.id == "=") {
    try {
      let res = eval(getResult);
      console.log(res);
      refreshInfo("result", res);
      refreshInfo("history", getResult);
    } catch (error) {
      refreshInfo("result", "Syntax Error");
    }
  } else if (operator.id) {
    return refreshInfo("result", getResult + operator.id);
  } else if (getResult != "" && getHistory != "") {
    if (isResultShow == true) {
      refreshInfo("result", getResult);
    } else {
      refreshInfo("result", getResult + operator.id + getResult);
    }
  }
}

function onClickNumber(num) {
  const getResult = getInfo("result");
  const getHistory = getInfo("history");

  if (getResult == "" && getHistory == "") {
    refreshInfo("result", getResult + num.id);
  } else {
    refreshInfo("result", getResult + num.id);
  }
}
