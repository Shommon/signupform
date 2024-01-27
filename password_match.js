const passwordinput = document.querySelector('#password');
const passwordconfirm = document.querySelector('#password-confirm');
const col3 = document.querySelector('.col3');
var requirementinfo = document.createElement('p');

requirementinfo.id = 'requirementText';
requirementinfo.textContent = 'Password Must contain 5-20 characters';
requirementinfo.classList.add('notlength');
var metlength = false;

passwordinput.addEventListener('input', (e) => {
    addLengthRequirementText(e);
    checkInputLength();

})
passwordconfirm.addEventListener('input', () => {
    checkMatching();
})

// passwordconfirm.addEventListener('blur', )



//Handle Password Matching
    function checkMatching() {
        if (passwordinput.value == passwordconfirm.value) {
            passwordMatch();
            console.log('Password Matches');
            passwordMatch();
        } else {
            passwordNoMatch();
            console.log('No Match');
        }
    }

    function passwordNoMatch() {
        passwordinput.classList.remove('match')
        passwordinput.classList.add('error')

        passwordconfirm.classList.remove('match')
        passwordconfirm.classList.add('error')
    }

    function passwordMatch() {
        passwordinput.classList.remove('error')
        passwordinput.classList.add('match')

        passwordconfirm.classList.remove('error')
        passwordconfirm.classList.add('match')
    }

// col3.appendChild(requirementinfo);

//Handle Length Requirement
    function addLengthRequirementText() {
        //check if passwordinput element already has requirement text
        //Add passwordinput element if it doesnt
        if (!col3.querySelector('#requirementText')){
            col3.appendChild(requirementinfo)
        }
    }

    function checkInputLength() {
        var input = passwordinput.value;
        if (metlength === false && input.length >= 5){
            requirementToggle();
            metlength = true;
        } else if (metlength === true && input.length <= 4) {
            requirementToggle();
            metlength = false;
        }
    }



    function requirementToggle(){
        requirementinfo.classList.toggle('metlength');
        requirementinfo.classList.toggle('notlength');

        // parent.removeChild(childnode);
        // parent.appendChild(requirementinfo);
    }