let num1 = "";
let num2 = "";
let operator = "";
let result = undefined;

$(() => {
    $('button').click(function() {
        switch(this.value) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if(result || result === 0) {
                    //has result
                    break;
                } else if(operator) {
                    num2 += this.value;
                } else {
                    num1 += this.value;
                }
                break;
            case "clear":
                num1 = "";
                num2 = "";
                operator = "";
                result = undefined;
                break;
            case 'equals' :
                //TODO: do calculation
                //TODO: display results.
                break;
            default: 
            if(result || result === 0) {
                break;
            } else {
                operator  = this.value;
            }
                break;
        }
    });
})

function getNum1() {
    if(num1.length) {
        return parseInt(num1);
    } else {
        return 0;
    }
}

function getNum2() {
    if(num2.length) {
        return parseInt(num2);
    } else {
        return 0;
    }
}

function getOperator() {
    return operator;
}