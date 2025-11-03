document.addEventListener('DOMContentLoaded', ()=>{
    const display = document.getElementById('result');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = "";
    let operator = null ;
    let FirstOperand = "";
    let SecondOperand = "";
    buttons.forEach(button => {
        button.addEventListener('click', ()=>{
            const value = button.getAttribute("data-value");
            if(value === "C"){
                currentInput = "";
                operator = null;
                FirstOperand = "";
                SecondOperand = "";
                display.value = "";
            }else if (value === "DEL"){
                currentInput = currentInput.slice(0, -1)
                display.value = currentInput;
            }else if (value === "="){
                if(operator && FirstOperand &&currentInput){
                    SecondOperand = currentInput;
                    const result = calculate (FirstOperand, SecondOperand, operator);
                    display.value = result;
                    currentInput = result;
                    operator = null;
                    FirstOperand = "";
                    SecondOperand = ""
                }
            }
            else if(["+","-","*","/"].includes(value)){
                if(currentInput){
                operator = value;
                FirstOperand = currentInput;
                currentInput = "";
                }
            }
            else{
                currentInput += value;
                display.value = currentInput;
            }
        })
    })
    function calculate(num1 , num2, operator){
        num1= parseFloat(num1);
        num2= parseFloat(num2);

        switch(operator){
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;
            default:
                return 0;
        }
    }
})