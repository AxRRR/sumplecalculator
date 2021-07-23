function getInfo(type) {
  switch (type) {
        case 'history':
            return document.getElementById("history").innerText;
        case 'result':
            return document.getElementById("result").innerText;

    default:
        break;
  }
}

function refreshInfo(type, number) {
  switch (type) {
        case 'history':
            document.getElementById("history").innerText = number;

        case 'result':
            if(number == ""){
                return document.getElementById("result").innerText = "";
            }
            else{ 
                return document.getElementById("result").innerText = number;
            }

    default:
      break;
  }
}

function getNumber() {
    return number = document.getElementsByName("number");
}

// function getOperator() {
//     return operator = document.getElementsByName("operator");
// }

var operator = document.getElementsByName("operator");
    for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener('click', () => onClickOperator(operator[i]));
    }

function onClickOperator(operator) {
    // console.log(button)
    if(operator.id == "clear") {
        refreshInfo('history', "")
        refreshInfo('result', "")
    }
}


// getOperator();
// // getNumber();
