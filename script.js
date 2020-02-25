
var chosenPercent = 0;


function test(){
   
    var billAmount = document.getElementById("inputTextBox").value;
    console.log(billAmount);

    var output = document.getElementById('result');
    console.log(output);
    
    var result = billAmount * chosenPercent;

    output.innerHTML = 'Tip - $' + result;
    
    

}



function tipPercent(choice){


    if(choice == 1){
        chosenPercent = .10;
    }

    if(choice == 2){
        chosenPercent = .15;
    }

    if(choice == 3){
        chosenPercent = .20;
    }

}

