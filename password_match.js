const passwordinput = document.querySelector('#password');
const passwordconfirm = document.querySelector('#password-confirm');


function checkInputContent () {
    var input = passwordinput.value;
    if (input !== ''){
        console.log('not empty');
    } else {
        console.log('empty');
    }
}

function passwordNoMatch() {
    //Add Red Color to Input Box
    //Add Div under input to warn not matching
}

function passwordMatch() {
    // Add Green Color to Input Box
}