let num1 = "";
let num2 = "";
let operator = "";
let result = undefined;

$(() => {

    $('.number').click(function() { 
        if(isNumber(result)) {
            //has result
            break;
        } else if(operator) {
            num2 += this.value;
        } else {
            num1 += this.value;
        }
        //TODO: display both number with new values.
    });
    
    $('.operator').click(function() { 
        if(isNumber(result)) {
            break;
        } else {
            operator  = this.value;
            //TODO: display operator
        }
    });

    $('.clear').click(function() { 
        num1 = "";
        num2 = "";
        operator = "";
        result = undefined;
        //TODO: clear display
    });

    $('.equal').click(function() { 
        //do calculation
        if(operator.length>0 && isNumber(getNum1()) && isNumber(getNum2())) {
            result = calculator(getNum1(), getNum2(), getOperator);

        }
        //TODO: display results.
    });
})

function isNumber(num) {
    return num === 0 || num;
}

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