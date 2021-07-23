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
            return document.getElementById("history").innerText = number;

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

function getOperator() {
    return operator = document.getElementsByName("operator");
}

var operator = document.getElementsByName("operator");
    for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener('click', () => onClickOperator(operator[i]));
    }

var number = document.getElementsByName("number");
    for (let i = 0; i < number.length; i++) {
        number[i].addEventListener('click', () => onClickNumber(number[i]));
    }

    function reverseNumberFormat(num){
        return Number(num.replace(/,/g,''));
    }

    function onClickOperator(operator) {
        const getNumber = getInfo('result');
        const getHistory = getInfo('history');

        if(operator.id == "clear") {
            refreshInfo('history', "")
            refreshInfo('result', "")
        }
        else if(operator.id == "=") {
            let res = eval(getNumber);
            console.log(res)
            refreshInfo('result', res)
        }
        else if(getNumber != "" && getHistory != ""){
            console.log('aca estamos en el if')
            refreshInfo('result', getHistory+operator.id+getNumber)
        }
    }

    function onClickNumber(num) {
        const getNumber = getInfo('result');
        const getHistory = getInfo('history');
        // console.log(getNumber)
        if(getNumber == "" && getHistory == "") {
            refreshInfo('result', num.id)
        } else {
            refreshInfo('history', getNumber);
            refreshInfo('result', num.id)
        }
    }

