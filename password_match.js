const passwordinput = document.querySelector('#password');
const passwordconfirm = document.querySelector('#password-confirm');
const col3 = document.querySelector('.col3');
var requirementinfo = document.createElement('p');

requirementinfo.id = 'requirementText'
requirementinfo.textContent = 'Password Must contain 5-20 characters'


passwordinput.addEventListener('input', (e) => {
    addLengthRequirementText(e);
    // checkInputLength();

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
    function addLengthRequirementText(element) {
        // console.log(element.target.id)
        var parentElement = element.target


    }

    function checkInputLength() {
        var input = passwordinput.value;
        if (input.length >= 5){
            console.log('Met Requirement');
            metLengthRequirement();
        } else {
            console.log('Has Not Met Requirement');
            notMetLengthRequirement();
        }
    }

    function metLengthRequirement() {
        requirementinfo.classlist.remove('error');
        requirementinfo.classList.add('metlength');
    }

    function notMetLengthRequirement() {
        requirementinfo.classlist.remove('metlength');
        requirementinfo.classList.add('error');
    }